import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  LoadingController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { validCPF } from "src/app/core/util/cpf-valid";
import { RequestService } from "src/app/core/request-help/request-service";
import * as moment from "moment";
import { UserPosted } from "../model/UserPosted";
import { TermAcceptComponent } from "./term-accept/term-accept.component";

@Component({
  selector: "app-first-access",
  templateUrl: "./first-access.component.html",
  styleUrls: ["./first-access.component.scss"],
})
export class FirstAccessComponent implements OnInit {
  stepSelect = 0;
  stepEnd = 4;
  user: any = {};
  term_accept: boolean = false;
  formFirst: FormGroup;
  loading: any;

  constructor(
    private router: Router,
    private builder: FormBuilder,
    public toastController: ToastController,
    private requestService: RequestService,
    private loadingController: LoadingController,
    public modalController: ModalController
  ) {}

  ngOnInit() {
    this.createForm();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Aguarde..."
    });
    await this.loading.present();
  }

  async presentToast(message: string, type: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      color: type
    });
    toast.present();
  }

  createForm() {
    this.formFirst = this.builder.group({
      cpf: [null, [Validators.required]],
      date: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$')]],
      cEmail: [null, [Validators.required, Validators.pattern('^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$')]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')]],
      repeatPassword: [null, [Validators.required, Validators.minLength(8), Validators.pattern('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')]]
    });
  }

  next(step, back: boolean = false) {    
    if (step === 1) {      
      if (this.formFirst.controls.cpf.errors?.required) {
        this.presentToast("Informe seu CPF", "warning");
      } else if (!validCPF(this.formFirst.controls.cpf.value)) {
        this.presentToast("CPF inválido", "danger");
      } else {
        
        this.presentLoading();
        this.requestService
          .get(
            "Patient/getPatientByCpf?cpf=" + this.formFirst.controls.cpf.value
          )
          .subscribe(
            (res: any) => {
              if (res !== null) {
                this.user = res;

                this.formFirst.controls.email.setValue(this.user.email);
                this.formFirst.controls.cEmail.setValue(this.user.email);

                this.requestService
                  .get("User/getUserByCpf?cpf=" + this.user.cpf)
                  .subscribe(
                    (res: any) => {
                      if (!res) {
                        this.stepSelect = step;
                      } else {
                        this.presentToast(
                          "CPF informado já possui cadastro",
                          "primary"
                        );
                      }

                      this.loading.dismiss();
                    },
                    (err) => {
                      this.presentToast(
                        "Falha ao comunicar com o servidor, tente novamente mais tarde",
                        "danger");
                      this.loading.dismiss();
                    }
                  );
              } else {
                this.presentToast(
                  "CPF não encontrado na nossa base de dados",
                  "warning"
                );
                this.loading.dismiss();
              }
            },
            (err) => {
              this.presentToast(
                "Falha ao comunicar com o servidor, tente novamente mais tarde",
                "danger");
              this.loading.dismiss();
            }
          );
      }
    } else if (step === 2) {
      if (this.formFirst.controls.date.errors?.required) {
        this.presentToast("Informe sua data de nascimento", "warning");
      } else {
        if (
          moment(this.formFirst.controls.date.value).format("DD/MM/YYYY") === moment(this.user.dateBirth).format("DD/MM/YYYY")
        ) {
          if (this.user.agent) {
            if (!back) {
              this.presentModal(step);
            } else {
              this.stepSelect = 1;
            }
          } else {
            if (!back) {
              this.presentModal(step);
            } else {
              this.stepSelect = 1;
            }
          }
        } else {
          this.presentToast(
            "Data de nascimento não corresponde com a data cadastrada",
            "warning"
          );
        }
      }      
    } else if (step === 4) {
      if (this.formFirst.controls.email.errors?.required) {
        this.presentToast("Informe seu e-mail", "warning");
      } else  if (this.formFirst.controls.email.errors?.pattern) {
        this.presentToast("E-mail inválido", "warning");
      } else if (this.formFirst.controls.cEmail.errors?.required) {
        this.presentToast("Confirme seu e-mail", "warning");
      } else if (this.formFirst.controls.cEmail.errors?.pattern) {
        this.presentToast("Confirmação de e-mail inválida", "warning");        
      } else if (this.formFirst.controls.email.value !== this.formFirst.controls.cEmail.value) {
        this.presentToast("E-mails estão diferentes", "primary");
      } else {
        this.stepSelect = step;
      }
    } else {
      this.stepSelect = step;      
    }
  }

  backLogin() {
    this.router.navigate(["/login"]);
  }

  populateSave(): UserPosted {
    const user = new UserPosted();
    user.name = this.user.name;
    user.email = this.formFirst.controls.email.value;
    user.password = this.formFirst.controls.password.value;
    user.cpf = this.user.cpf;
    user.idType = 3;
    user.active = true;
    return user;
  }

  save() {
    if (this.formFirst.controls.password.errors?.required) {
      this.presentToast("Informe sua Senha", "warning");
    } else if (this.formFirst.controls.password.errors?.minlength) {
        this.presentToast("Senha deve conter 8 ou mais caracteres", "warning");
    } else if (this.formFirst.controls.password.errors?.pattern) {
      this.presentToast("Senha deve conter números, letra maiúscula e caractere especial", "warning");
      this.formFirst.controls.repeatPassword.reset();
    } else if (this.formFirst.controls.repeatPassword.errors?.required) {
      this.presentToast("Informe a confirmação de senha", "warning");
    } else if (this.formFirst.controls.repeatPassword.errors?.minlength) {
      this.presentToast("Confirmação de senha deve conter 8 ou mais caracteres", "warning");
    } else if (this.formFirst.controls.repeatPassword.errors?.pattern) {
      this.presentToast("confirmação de senha inválida", "warning");
      this.formFirst.controls.repeatPassword.reset();
    } else if (this.formFirst.controls.password.value !== this.formFirst.controls.repeatPassword.value) {
      this.presentToast("Senha e confirmação de senha estão diferentes", "warning");
      this.formFirst.controls.repeatPassword.reset();
    } else {
      this.requestService
        .post("User/new-user-app", JSON.stringify(this.populateSave()))
        .subscribe(
          (res: any) => {
            if (res) {
              this.router.navigate(["/login"]);
              this.presentToast("Cadastro realizado com sucesso", "success");
            }
          },
          (err: any) => {
            console.error(err);
            this.presentToast("Falha durante o cadastro, tente novamente mais tarde.", "error");
          }
        );
    }
  }

  async presentModal(step: number) {
     const modal = await this.modalController.create({
      component: TermAcceptComponent,
      cssClass: 'my-custom-class'
    });   

    modal.onDidDismiss()
      .then((data) => {        
        const next = data['data']['next'];
        if (next) {
          this.stepSelect = 3;
        }
    });

    return await modal.present();
  }

}