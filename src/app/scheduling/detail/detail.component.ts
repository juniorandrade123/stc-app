import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Location } from '@angular/common';
import { AlertController, ToastController, LoadingController } from "@ionic/angular";
import { RequestService } from 'src/app/core/request-help/request-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchedulingSaveAppDto } from '../model/scheduling-save-app-dto';
import { LoadingOn, LoadingOnDidDismiss } from 'src/app/core/util/loading';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  scheduling: any = {};

  mockTransport = null;

  stepCard: any[] = [
    {
      id: 1,
      name: 'Confirmar agendamento?'
    },
    {
      id: 2,
      name: 'Precisa de transporte?'
    },
    {
      id: 3,
      name: 'Portador de Necessidades Especiais?'
    },
    {
      id: 4,
      name: 'Levará acompanhante?'
    }
  ];

  stepCardNoTransport: any[] = [        
    {
      id: 1,
      name: 'Portador de Necessidades Especiais?'
    },
    {
      id: 2,
      name: 'Levará acompanhante?'
    }
  ];

  stepActual: number = 1;

  formScheduling: FormGroup;

  loading: any;

  companionAvailable: boolean = true;

  constructor(private routeSub: ActivatedRoute, private router: Router,
    public alertController: AlertController, private requestService: RequestService,
    private builder: FormBuilder, public toastController: ToastController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.getCard();
    this.createForm();
  }

  async presentLoading() {
    await LoadingOn(this.loadingController);
  }

  createForm() {
    this.formScheduling = this.builder.group(
      {
        needTransport: [null, Validators.required],
        isSpecial: [null],
        companion: [null],
        transport: [null]
      }
    )
  }

  getTransport() {
    this.routeSub.params.subscribe(params => {
      if (params['id'] !== undefined) {
        const transp = JSON.parse(localStorage.getItem('transport'));
        
        if (transp != null) {
          let check = transp.id === params['id'];

          if (check)
            this.mockTransport = transp;
          else
            this.mockTransport = null;
        }
        else
          this.mockTransport = null;
      }
    });
  }

  async presentAlertCancelConsulting() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar consulta',
      message: 'Você tem certeza que deseja cancelar? ',
      buttons: [
        {
          text: 'Sim',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.routeSub.params.subscribe(params => {
              this.router.navigate(['cancel/', params['id']]);
            })
          }
        }, {
          text: 'Não',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async getCard() {
    await this.presentLoading();
    this.routeSub.params.subscribe(params => {
      if (!isNullOrUndefined(params['id'])) {
        this.requestService.get('scheduling/getSchedulingAppById?idScheduling=' + Number(params['id']))
        .subscribe(async (result: any) => {
          this.scheduling = result;
          this.companionAvailable = this.scheduling.companionAvailable;
          await LoadingOnDidDismiss(this.loadingController);   
        },
        async (err) => {
          await LoadingOnDidDismiss(this.loadingController);
          console.error(err);          
        })
      }
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

  propulateForm(step, change) {   
    switch (step) {
      case 3:
        this.formScheduling.controls.needTransport.setValue(change);
        if (!change) {
          this.sendForm(); 
        }
        break;
      case 4:        
        this.formScheduling.controls.isSpecial.setValue(change);
        break;
      case 5:
        this.formScheduling.controls.companion.setValue(change);
        break;
    }
  }

  populateObj(): SchedulingSaveAppDto {
    var obj = new SchedulingSaveAppDto();

    obj.needTransport = this.formScheduling.controls.needTransport.value;
    obj.isSpecial = this.formScheduling.controls.isSpecial.value;
    obj.companion = this.formScheduling.controls.companion.value;
    obj.idScheduling = this.scheduling.id;
    obj.idTransport = this.formScheduling.controls.transport.value;
    
    return obj;
  }

  sendForm() {
    this.presentLoading();

    this.requestService.post('Scheduling/confirmSchedulingApp', JSON.stringify(this.populateObj()))
    .subscribe(
      async (res: any) => {
        if (res) {
          await LoadingOnDidDismiss(this.loadingController);
          this.presentToast('Agendamento confirmado com sucesso', 'success');
          window.location.href = 'list';
        }        
      },
      async (err: any) => {
        await LoadingOnDidDismiss(this.loadingController);
        this.presentToast('Houve um erro ao tentar confirmar o agendamento', 'danger');
      }
    )
  }

  navigateStep(step, no, change) {

    if (!no) {
      this.propulateForm(step, change);
      if (step === 0) {
        this.stepActual = 1;
      } else if (step === 5 || (this.stepActual === 3 && !this.companionAvailable) ) {
        this.routeSub.params.subscribe(params => {
          if (!isNullOrUndefined(params['id'])) {
            localStorage.setItem('detail-scheduling', JSON.stringify(this.populateObj()));
            location.href = 'transport/' + params['id'] + '/' + this.formScheduling.controls.isSpecial.value;            
          }
        });
      }
      else {
        this.stepActual = step;
      }
    } else {
      if (this.stepActual === 1) {
        this.presentAlertCancelConsulting();
      }

      if (this.stepActual === 2) {
        this.formScheduling.controls.needTransport.setValue(false);
        this.sendForm();        
      }

      if (this.stepActual === 4) {
        this.routeSub.params.subscribe(params => {
          if (!isNullOrUndefined(params['id'])) {
            localStorage.setItem('detail-scheduling', JSON.stringify(this.populateObj()));
            location.href = 'transport/' + params['id'] + '/' + this.formScheduling.controls.isSpecial.value; 
          }
        });
      }

      if (this.stepActual === 3) {
        
        if (this.companionAvailable) {
          this.stepActual = 4;
        } else {
          this.routeSub.params.subscribe(params => {
            if (!isNullOrUndefined(params['id'])) {
              localStorage.setItem('detail-scheduling', JSON.stringify(this.populateObj()));
              location.href = 'transport/' + params['id'] + '/' + this.formScheduling.controls.isSpecial.value;
            }
          });
        }
      }

    }
  }

  requestTransport() {
    this.formScheduling.controls.needTransport.setValue(true);
    this.navigateStep(3, false, true);
  }

  async cancelTransportAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar transporte',
      message: 'Você tem certeza que deseja cancelar o transporte? ',
      buttons: [
        {
          text: 'Sim',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.cancelTransport();
          }
        }, {
          text: 'Não',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  cancelTransport() {
    var obj = new SchedulingSaveAppDto();
    obj.needTransport = false;
    obj.isSpecial = false;
    obj.companion = false;
    obj.idScheduling = this.scheduling.id;
    obj.idTransport = null;

    this.presentLoading();

    this.requestService.post('Scheduling/confirmSchedulingApp', JSON.stringify(obj))
    .subscribe(
      async (res: any) => {
        if (res) {
          await LoadingOnDidDismiss(this.loadingController);
          this.presentToast('Transporte cancelado com sucesso', 'success');
          this.getCard();
        }        
      },
      async (err: any) => {
        await LoadingOnDidDismiss(this.loadingController);
        this.presentToast('Houve um error ao tentar de cancelar o transporte do agendamento', 'danger');
      }
    )
  }

  backDash() {
    this.router.navigate(['/list']);
  }


  downloadFile(file) {
    let url  = this.requestService.downloadFile(file.id, file.fileName);
    window.open(url)
  }


}
