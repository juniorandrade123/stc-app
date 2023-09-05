import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-term-accept',
  templateUrl: './term-accept.component.html',
  styleUrls: ['./term-accept.component.scss'],
})
export class TermAcceptComponent implements OnInit {

  constructor(
    private router: Router,
    public modalController: ModalController
  ) { }

  ngOnInit() {}

  next() {    
    this.modalController.dismiss({
      'next': true
    });
  }

  back() {    
    this.modalController.dismiss({
      'next': false
    });
  }

}
