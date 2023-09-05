import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalCancelComponent } from './modal-cancel/modal-cancel.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss'],
})
export class CancelComponent implements OnInit {

  optionCancel: any[] = [
    {
      id: 1,
      name: 'Não preciso'
    },
    // {
    //   id: 2,
    //   name: 'Data incompatível'
    // },
    // {
    //   id: 3,
    //   name: 'Adiar'
    // },
    {
      id: 4,
      name: 'Outro'
    }
  ]

  id: number;

  constructor(private modal: ModalController, private routeSub: ActivatedRoute,
    private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.routeSub.params.subscribe(params => {
      this.id = Number(params['id']);
    })
  }

  backList() {
    window.location.href = '/detail/' + this.id;
  }

  async presentModal(option: any) {

    const modal = await this.modal.create({
      component: ModalCancelComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        'id': this.id,
        'option': option.id,
        'optionName': option.name
      }
    });
    return await modal.present();
  }

  

}
