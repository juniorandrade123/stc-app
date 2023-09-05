import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import * as moment from 'moment';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/core/request-help/request-service';
import { filter } from 'rxjs/operators';
import { LoadingOn, LoadingOnDidDismiss } from 'src/app/core/util/loading';

@Component({
  selector: 'app-modal-cancel',
  templateUrl: './modal-cancel.component.html',
  styleUrls: ['./modal-cancel.component.scss'],
})
export class ModalCancelComponent implements OnInit {

  @Input() id: number;
  @Input() option: number;
  @Input() optionName: string;

  weekDays = moment.localeData('pt-BR').weekdays()
  period: any[] = [
    {
      id: 1,
      name: 'Período da manhã',
    },
    {
      id: 2,
      name: 'Período da tarde',
    }
  ];
  days: any[] = [
    {
      id: 1,
      name: '15 dias'
    },
    {
      id: 2,
      name: '30 dias'
    },
    {
      id: 3,
      name: '45 dias'
    },
    {
      id: 4,
      name: '60 dias'
    }
  ];

  formDateIncompatible: FormGroup;
  formDelay: FormGroup;
  formDescription: FormGroup;
  loading: any;
  daysWeekSelect: any[] = [];
  periodSelect: any[] = [];

  constructor(private modalCtrl: ModalController, private builder: FormBuilder,
    private router: Router, private requestService: RequestService, public toastController: ToastController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.createFormDateIncopatible();
    this.createFormDelay();
    this.createFormDescription();
  }

  createFormDateIncopatible() {
    this.formDateIncompatible = this.builder.group({
      days: [null, Validators.required],
      period: [null, Validators.required]
    });
  }

  createFormDelay() {
    this.formDelay = this.builder.group(
      {
        day: [null, Validators.required]
      }
    )
  }

  createFormDescription() {
    this.formDescription = this.builder.group(
      {
        description: [null, Validators.required]
      }
    )
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  send() {
    this.cancel();
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
      duration: 2000,
      color: type
    });
    toast.present();
  }

  populateObj() {
    // option 1 = Nao preciso/Outro, option 2 = Data incompativel, option 3 = Adiar
    if (this.option === 1 || this.option === 4) {
      var obj = {
        IdScheduling: this.id,
        TypeCancel: this.option,
        Description: this.formDescription.controls.description.value
      }

      return obj;
    }

    if (this.option === 2) {

      let days = '';
      this.daysWeekSelect.forEach(element => {
        days += element.day + ' - ';
      });

      let period = '';
      this.periodSelect.forEach(element => {
        period += element.period.name + ' - ';
      });

      var objDate = {
        IdScheduling: this.id,
        TypeCancel: this.option,
        Description: 'Melhor dia: ' + days + 'Melhor período: ' + period
      }

      return objDate;
    }

    if (this.option === 3) {
      var objDelay = {
        IdScheduling: this.id,
        TypeCancel: this.option,
        Description: this.formDelay.controls.day.value
      }

      return objDelay;
    }

  }

  cancel() {
    LoadingOn(this.loadingController);
    this.requestService.post('Scheduling/cancelSchedulingApp', JSON.stringify(this.populateObj()))
    .subscribe(
      (res: any) => {
        if (res) {
          LoadingOnDidDismiss(this.loadingController);
          this.presentToast('Agendamento cancelado com sucesso', 'success');
          window.location.href = 'list';
        }        
      },
      (err: any) => {
        LoadingOnDidDismiss(this.loadingController);
        this.presentToast('Houve um error ao tentar de cancelar o agendamento', 'danger');
      }
    )
  }

  selectDelayDay(item) {
    this.formDelay.controls.day.setValue(item);
  }

  selectDays(item, index) {
    if (this.daysWeekSelect.length === 0 && this.daysWeekSelect.filter(a => a === item).length === 0)
        this.daysWeekSelect.push({day: item, index: index});
    else {
      if (this.daysWeekSelect.filter(a => a.day === item).length > 0) {
        this.daysWeekSelect.splice(index, 1);
      } else {
        this.daysWeekSelect.push({day: item, index: index});
      }
    }
    this.formDateIncompatible.controls.days.setValue(this.daysWeekSelect);
  }

  selectPeriod(item, index) {
    if (this.periodSelect.length === 0 && this.periodSelect.filter(a => a === item).length === 0)
    this.periodSelect.push({period: item, index: index});
    else {
      if (this.periodSelect.filter(a => a.period === item).length > 0) {
        this.periodSelect.splice(index, 1);
      } else {
        this.periodSelect.push({period: item, index: index});
      }
    }
    this.formDateIncompatible.controls.period.setValue(this.periodSelect);
  }

}
