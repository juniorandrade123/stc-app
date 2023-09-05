import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/core/auth/auth.service';
import { RequestService } from 'src/app/core/request-help/request-service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));
  dependent = JSON.parse(localStorage.getItem('dependent'));
  loading: any;
  public alertInputs = [];
  showChangeConsortium: boolean = false;

  constructor(public alertController: AlertController, private requestService: RequestService,
    public toastController: ToastController, private loadingController: LoadingController,
    private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.populateConsortiumView();
  }

  presentAlert = async () => {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alterar senha',
      inputs: [
        {
          name: 'pass-old',
          type: 'password',
          placeholder: 'Senha atual'
        },
        {
          name: 'pass',
          type: 'password',
          placeholder: 'Senha nova'
        },
        {
          name: 'pass-confirm',
          type: 'password',
          placeholder: 'Confirmar senha nova'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Salvar',
          handler: (values: any) => {
            var obj = {
              cpf: this.user.cpf,
              password: values['pass-old'],
              newPassword: values['pass'],
              confirmPassword: values['pass-confirm']
            }
              
            let regex = new RegExp(/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/);

            if (obj.newPassword.length < 8) {
              this.presentToast('Senha deve ter no mínimo 8 dígitos.', 'warning');
            } else if (!regex.test(obj.newPassword)) {
              this.presentToast('Senha deve conter números, letra maiúscula e caractere especial.', 'warning');
            } else if (obj.newPassword === obj.confirmPassword)
              this.alterPassword(obj);
            else 
              this.presentToast('Nova senha está diferente da confirmação da senha.', 'warning');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: 2000
    });
    await this.loading.present();
  }

  async presentToast(title: string, type: string) {
    const toast = await this.toastController.create({
      message: title,
      duration: 4000,
      color: type
    });
    toast.present();
  }

  alterPassword(obj) {
    this.presentLoading();
    this.requestService.postReturnString('User/alter-password-app', JSON.stringify(obj))
    .subscribe(
      (node: any) => {
        this.loading.onDidDismiss().then((dis) => {
          if (node) 
            this.presentToast('Senha alterada com sucesso.', 'success');        
          else
            this.presentToast('Senha atual informada está incorreta.', 'warning');        
        })
      },
      (err) => {
        this.loading.onDidDismiss().then((dis) => {
          this.presentToast('Falha na comunicação com o servidor.', 'danger'); 
        })
      }
    )
  }

  async logout() {
    await this.presentAlertConfirmLogout();
  }

  async presentAlertConfirmLogout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',      
      header: 'Deseja realmente sair do aplicativo?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Sim',
          handler: () => {
            localStorage.clear();
            this.router.navigate(['/']);
          }
        }
      ]
    });

    await alert.present();
  }

  populateConsortiumView = () => {
    let tenantList = JSON.parse(localStorage.getItem("tenantList"));
    if (tenantList.length > 1) {
      this.showChangeConsortium = true;
    }
    tenantList.forEach((element: any) => {
        this.alertInputs.push(
            {
                label: element.nameTenant,
                type: 'radio',
                value: element.tenant,
            }
        )
    });
}

async presentAlertConsortium() {
    const alert = await this.alertController.create({
      header: 'Por favor selecione qual convênio quer acessar seus agendamentos',
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'Voltar'
        },
         {
            text: 'OK',
            handler: async (select) => {
              console.log(select);
                if (select !== undefined) {
                  await this.setResultSelect(select);
                } else {
                  await this.presentAlertConsortium();
              }
            }
        }
    ],
      inputs: this.alertInputs
    });

    await alert.present();
  }

async setResultSelect(select) {
    this.authService.tenantID = select;
    location.reload();
}
}
