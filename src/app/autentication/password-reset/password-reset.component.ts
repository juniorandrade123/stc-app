import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RequestService } from 'src/app/core/request-help/request-service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder, private service: RequestService,
    private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.createForm();
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  createForm() {
    this.form = this.builder.group({
      email: [null, Validators.required]
    })
  }

  send() {
    this.service.put('User/requestToResetPassword/' + this.form.controls.email.value, {})
    .subscribe(
      async (result: any) => {
        await this.presentAlert(result.messages[0]);
      }
    )
  }

  back() {
    this.router.navigate(['/login']);
  }

}
