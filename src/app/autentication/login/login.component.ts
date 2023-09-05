import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/request-help/request-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { validCPF } from 'src/app/core/util/cpf-valid';
import { LoadingOn, LoadingOnDidDismiss } from 'src/app/core/util/loading';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    formLogin: FormGroup;
    public alertButtons = ['OK'];
    public alertInputs = [];

    constructor(
        private serviceHelper: RequestService,
        private builder: FormBuilder,
        private toastController: ToastController,
        private router: Router,
        private loading: LoadingController,
        private authService: AuthService,
        private firebaseService: FirebaseService,
        private alertController: AlertController) { }

    ngOnInit() {
        this.createForm();
    }

    async presentToast(title: string, type: string) {
        const toast = await this.toastController.create({
            cssClass: 'text-center',
            message: title,
            duration: 2000,
            color: type
        });
        toast.present();
    }

    createForm() {
        this.formLogin = this.builder.group({
            cpf: [null, Validators.required],
            password: [null, [Validators.required, Validators.minLength(8), Validators.pattern('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')]]
        })
    }

    openFirstAccess() {
        this.router.navigate(['/first-access']);
    }

    postLogin() {
        if (this.formLogin.controls.cpf.errors?.required) {
            this.presentToast('Informe CPF e senha', 'danger');
        } else if (!validCPF(this.formLogin.controls.cpf.value)) {
            this.presentToast('CPF inválido', "danger");
        } else if (this.formLogin.controls.password.errors?.required) {
            this.presentToast("Informe sua Senha", "danger");
        } else if (this.formLogin.controls.password.errors?.minlength) {
            this.presentToast("Senha deve conter 8 ou mais caracteres", "danger");
        } else if (this.formLogin.controls.password.errors?.pattern) {
            this.presentToast("Senha deve conter números, letra maiúscula e caractere especial", "danger");
        } else {
            LoadingOn(this.loading);
            const objLogin = {
                cpf: this.formLogin.controls.cpf.value,
                password: this.formLogin.controls.password.value
            }
            this.serviceHelper.post('User/tenant-app', JSON.stringify(objLogin))
                .subscribe(async (res: any) => {
                    LoadingOnDidDismiss(this.loading);

                    if (!!res) {
                        this.authService.tenantList = JSON.stringify(res);
                        if (res.length > 0) {
                            if (res.length > 1) {
                                await this.populateConsortiumView(res);
                                await this.presentAlert(objLogin);
                            } else {
                                this.authService.tenantID = res[0]["tenant"];
                                await this.login(objLogin);
                            }
                            sessionStorage.setItem('mail', this.formLogin.controls.cpf.value)
                        } else {
                            this.presentToast("CPF e/ou senha inválidos.", "danger");
                        }

                    }

                },
                    err => {
                        localStorage.removeItem('user');
                        LoadingOnDidDismiss(this.loading);
                        console.error(err);
                    }
                )
        }
    }

    resetPassword() {
        this.router.navigate(['password-reset']);
    }

    async login(objLogin) {
        this.serviceHelper.post('auth/login-app', JSON.stringify(objLogin))
            .subscribe(
                (res: any) => {
                    LoadingOnDidDismiss(this.loading);
                    if (res.authenticated) {
                        localStorage.setItem('user', JSON.stringify(res))
                        this.authService.token = res.token;

                        /**Salvando o token de notificação push do usuário! */
                        this.firebaseService.saveTokenUserFirebase();

                        if (res.typeUser !== 'agente') {
                            this.router.navigate(['']);
                        } else {
                            this.router.navigate(['dual']);
                        }

                    } else {
                        this.presentToast(res.message, "danger");
                    }
                },
                err => {
                    localStorage.removeItem('user');
                    LoadingOnDidDismiss(this.loading);
                    console.error(err);
                }
            )
    }

    populateConsortiumView = async (consortiumList: any[]) => {
        consortiumList.forEach((element: any) => {
            this.alertInputs.push(
                {
                    label: element.nameTenant,
                    type: 'radio',
                    value: element.tenant,
                }
            )
        });
    }

    async presentAlert(objLogin) {
        const alert = await this.alertController.create({
          header: 'Por favor selecione qual convênio quer acessar seus agendamentos',
          subHeader: '',
          message: '',
          buttons: [
             {
                text: 'OK',
                handler: async (select) => {
                    if (select !== undefined) {
                        await this.setResultSelect(select, objLogin);
                    } else {
                        await this.presentAlert(objLogin);
                    }
                }
            }
        ],
          inputs: this.alertInputs
        });
    
        await alert.present();
      }

    async setResultSelect(select, objLogin) {
        this.authService.tenantID = select;
        await this.login(objLogin);
    }

}
