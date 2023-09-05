import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/core/request-help/request-service';
import { DependentHolderAddDto } from '../model/dependent-holder-add-dto';

@Component({
  selector: 'app-dependent-add',
  templateUrl: './dependent-add.component.html',
  styleUrls: ['./dependent-add.component.scss'],
})
export class DependentAddComponent implements OnInit {

  form: FormGroup;
  user = JSON.parse(localStorage.getItem('user'));

  constructor(
    private modalCtrl: ModalController,
    private builder: FormBuilder,
    private service: RequestService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.builder.group({
      cpf: [null, Validators.required],
      birthDate: [null, Validators.required]
    })
  }

  save() {
    if (this.form.valid) {
      const model = new DependentHolderAddDto();
      model.idUser = this.user.id;
      model.cpf = this.form.controls.cpf.value.replace(".", "").replace(".", "").replace("-", "");
      model.birthDate = this.form.controls.birthDate.value;

      this.service.post('Dependent/DependentAdd', JSON.stringify(model))
        .subscribe(
          (result: any) => {
            if (result.result) {
              this.presentToast('Dependente vinculado com sucesso!', 'success');
              this.dismiss();
            } else {
              this.presentToast(result.messages[0], 'warning');
            }
          }, error => {
            this.presentToast('Erro incluir dependente', 'warning');
          });
    } else {
      this.presentToast('Preencha todos os campos', 'warning');
    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async presentToast(title: string, type: string) {
    const toast = await this.toastController.create({
      message: title,
      duration: 2000,
      color: type
    });
    toast.present();
  }

}
