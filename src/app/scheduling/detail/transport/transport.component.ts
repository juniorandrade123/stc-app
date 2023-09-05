import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/core/request-help/request-service';
import { FormGroup } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { SchedulingSaveAppDto } from '../../model/scheduling-save-app-dto';
import { LoadingOn, LoadingOnDidDismiss } from 'src/app/core/util/loading';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
})
export class TransportComponent implements OnInit {

  card: any;

  id: string;

  @Input()
  form: FormGroup;

  transport: any[] = [];
  user = JSON.parse(localStorage.getItem('user'));
  isSpecial: boolean = false;

  constructor(private routeSub: ActivatedRoute,
    private requestService: RequestService, public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.routeSub.params.subscribe(params => {
      if (params['id'] !== null && params['id'] !== undefined) {
        this.id = params['id'];
      }
      if (params['isSpecial'] !== null && params['isSpecial'] !== undefined) {
        this.isSpecial = params['isSpecial'];
      }
    });

    this.getTransport();
  }

  getTransport() {
    this.requestService.get('transport/GetTransportByPatientCity?cpfUser=' + this.user.cpf.replace(".", "").replace(".", "").replace("-", "") + '&schedulingId=' + this.id + "&IsSpecial=" + this.isSpecial)
      .subscribe(
        (result: any) => {
          this.transport = result;
        },
        (err) => {
          console.error(err);
        }
      )
  }

  select(item) {
    this.presentAlert(item);
  }

  noTransport() {
    location.href = 'detail/' + this.id;
  }

  async presentLoading() {
    await LoadingOn(this.loadingController);
  }

  async presentToast(title: string, type: string) {
    const toast = await this.toastController.create({
      message: title,
      duration: 3000,
      color: type
    });
    await toast.present();
  }

  async presentAlert(item: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: 'O transporte pode ser alterado devido a disponibilidade da prefeitura.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.sendForm(this.populateObj(item.id, true));
          }
        }
      ]
    });

    await alert.present();
  }

  populateObj(idTransport?: number, haveTransport?: boolean): SchedulingSaveAppDto {
    var obj = new SchedulingSaveAppDto();
    obj.needTransport = JSON.parse(localStorage.getItem('detail-scheduling')).needTransport;
    obj.isSpecial = JSON.parse(localStorage.getItem('detail-scheduling')).isSpecial;
    obj.companion = JSON.parse(localStorage.getItem('detail-scheduling')).companion;
    obj.idScheduling = JSON.parse(localStorage.getItem('detail-scheduling')).idScheduling;
    obj.idTransport = haveTransport === true ? idTransport : null;
    return obj;
  }

  sendForm(obj) {
    this.presentLoading();

    this.requestService.post('Scheduling/confirmSchedulingApp', JSON.stringify(obj))
      .subscribe(
        async (res: any) => {
          if (res) {
            await LoadingOnDidDismiss(this.loadingController);
            this.presentToast('Agendamento confirmado com sucesso', 'success');
            setTimeout(function () { location.href = 'list'; }, 2000);
          }
        },
        async (err: any) => {
          await LoadingOnDidDismiss(this.loadingController);
          this.presentToast('Houve um erro ao tentar confirmar o transporte', 'danger');
        }
      )
  }

  public async confirmWithoutTransport(): Promise<void> {
    this.sendForm(this.populateObj(0, false));
  }
}
