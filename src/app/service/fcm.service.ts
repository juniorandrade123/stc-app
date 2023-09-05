import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Capacitor
} from '@capacitor/core/dist';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadingOnDidDismiss } from '../core/util/loading';

let count = 0;

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  constructor(private router: Router, 
    public alertController: AlertController,
    public loadingController: LoadingController) { }

  initPush() {
    if (Capacitor.getPlatform() !== 'web') {
      // this.registerPush();
    }
  }

  private registerPush() {

    // LoadingOnDidDismiss(this.loadingController);

    // PushNotification.requestPermissions().then( result => {
    //   if (result.receive == 'granted') {
    //     // Register with Apple / Google to receive push via APNS/FCM
    //     PushNotification.register();
    //   } else {
    //     // Show some error
    //   }
    // });

    // PushNotification.addListener('registration',
    //   (token) => {
    //     console.log('Push registration success, token: ' + token.value);
    //     if (count === 0) {
    //         localStorage.setItem('device-token', token.value);
    //         count = count + 1;
    //     }
    //   }
    // );

    // PushNotification.addListener(
    //   'registrationError',
    //   (error: any) => {
    //     console.log('Error Push: ', + JSON.stringify(error));
    //   }
    // )

    // PushNotification.addListener(
    //   'pushNotificationReceived',
    //   async (notification) => {        
    //     console.log('Push received: ' + JSON.stringify(notification));

    //     const alert = await this.alertController.create({
    //       cssClass: 'my-custom-class',
    //       header: 'Aviso',
    //       message: notification.body,
    //       buttons: [
    //         {
    //           text: 'Sair',
    //           role: 'cancel',
    //           cssClass: 'secondary',
    //           handler: (blah) => {
    //           }
    //         }, {
    //           text: 'Visualizar',
    //           handler: () => {
    //             const data = notification.data;
    //             if (data['SchedulingID'] !== null) {
    //               if (data['SchedulingStatus'] !== 2) {
    //                 this.router.navigate(['/detail/', data['SchedulingID']]);
    //               } else {
    //                 this.router.navigate(['/question-scheduling/', data['SchedulingID']]);
    //               }
    //             }
    //           }
    //         }
    //       ]
    //     });
    
    //     await alert.present();
    //   }
    // )

    // PushNotification.addListener(
    //   'pushNotificationActionPerformed',
    //   async (notification) => {
    //     const data = notification.notification.data;
    //     console.log('Action performed: ' + JSON.stringify(data));
    //     if (data['SchedulingID'] !== null) {
    //       if (data['SchedulingStatus'] === 2) {
    //         this.router.navigateByUrl('/question-scheduling/' + data['SchedulingID']);
    //       } else {
    //         this.router.navigateByUrl('/detail/' + data['SchedulingID']);
    //       }
    //     }
    //   }
    // )
  }
}
