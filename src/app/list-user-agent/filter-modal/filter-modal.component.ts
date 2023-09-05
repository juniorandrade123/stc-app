import { Component, OnInit, EventEmitter } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RequestService } from 'src/app/core/request-help/request-service';
import { DependentHolderFilterDto } from 'src/app/dependent/model/dependent-holder-filter-dto';
import { isNil } from 'lodash';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'));
  form: FormGroup;
  resultFilter = {
    result: [],
    isFilter: true
  };
  url: string;

  constructor(
    private modalCtrl: ModalController,
    private builder: FormBuilder,
    public toastController: ToastController,
    private service: RequestService) { }

  ngOnInit() {
    const typeFilter = localStorage.getItem('typeFilter');
    this.url = typeFilter === 'holder' ? 'Holder/GetHoldersByFilter' : 'Dependent/GetDependentsByFilter'
    this.createForm();
  }

  createForm() {
    this.form = this.builder.group({
      cpf: [null],
      birthDate: [null]
    })

    const filter = localStorage.getItem('filterModal');

    if (!isNil(filter)) {
      const form = JSON.parse(filter);
      this.form.controls.cpf.setValue(form.cpf);
      this.form.controls.birthDate.setValue(form.birthDate);
    }
  }

  applyFilter() {
    const model = new DependentHolderFilterDto();
    model.cpf = this.form.controls.cpf.value;
    model.birthDate = this.form.controls.birthDate.value;
    model.idUser = this.user.id;

    this.service.post(this.url, JSON.stringify(model)).subscribe(
      (result: any) => {
        this.resultFilter = {
          isFilter: isNil(model.cpf) && isNil(model.birthDate) ? false : true,
          result: result
        };

        localStorage.setItem('filterModal', JSON.stringify(model));

        this.dismiss(this.resultFilter);
      }, error => {
        this.presentToast('Erro ao consultar pacientes', 'error');
      });
  }

  cleanFilter() {
    const model = new DependentHolderFilterDto();
    model.idUser = this.user.id;

    this.service.post(this.url, JSON.stringify(model)).subscribe(
      (result: any) => {
        this.resultFilter = {
          isFilter: false,
          result: result
        };

        localStorage.removeItem('filterModal');
        this.dismiss(this.resultFilter);
      }, error => {
        this.presentToast('Erro ao consultar pacientes', 'error');
      });
  }

  dismiss(result?: any) {
    if (isNil(result)) {
      localStorage.removeItem('filterModal');
    }

    this.modalCtrl.dismiss({
      'data': result,
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
