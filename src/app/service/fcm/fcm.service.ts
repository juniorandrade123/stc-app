import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FirebaseService } from '../firebase/firebase.service';

/**
 * Classe responsável pela manutenção e exibição das notificações push
 * @author Gustavo Teles
 */
@Injectable({
    providedIn: 'root'
})
export class FcmService {
    constructor(
        private router: Router,
        private platform: Platform,
        private alertController: AlertController,
        private firebaseMessaging: FirebaseMessaging,
        private loadingController: LoadingController,
        private firebaseService: FirebaseService,
        private http: Http) { }

    initPush() {
        if (this.platform.is('cordova')) {
            this.registerPush();
        }
    }

    private registerPush() {
        console.log('🚀 --------INICIANDO AS NOTIFICAÇÕES PUSH--------');

        this.firebaseMessaging.requestPermission().then((result) => {
            if (result === 'granted') {
            } else {
            }
        });

        this.firebaseMessaging.subscribe('marketing');

        this.firebaseMessaging.getToken().then(token => {
            console.log('🚀 --------TOKEN NOTIFICAÇÕES PUSH--------' + token);
            localStorage.setItem('device-token', token);
        });

        this.firebaseMessaging.onMessage().subscribe(async notification => {
            console.log('🚀 --------NOTIFICAÇÃO-------' + notification.gcm.body);
            if (notification.gcm.clickAction !== 'chat') {
                const alert = await this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: notification.gcm.title,
                    message: notification.gcm.body,
                    buttons: [
                        {
                            text: 'Voltar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                            }
                        }, {
                            text: 'Ok',
                            handler: () => {
                                const data = notification.data;
                                if (data['SchedulingID'] !== null) {
                                    if (data['SchedulingStatus'] !== 2) {
                                        this.router.navigate(['/detail/', data['SchedulingID']]);
                                    } else {
                                        this.router.navigate(['/question-scheduling/', data['SchedulingID']]);
                                    }
                                }
                            }
                        }
                    ]
                });
                await alert.present();
            }

        });

        this.firebaseMessaging.onBackgroundMessage().subscribe(async notification => {
            console.log('🚀 --------NOTIFICAÇÃO EM BACKGROUND-------' + notification.gcm.body);
        });

        this.firebaseMessaging.onTokenRefresh();

        this.firebaseMessaging.requestPermission().then(hasPermission => {
            console.log('🚀 --------PERMISSÃO PARA NOTIFICAÇÃO-------' + hasPermission);
        })
    }

    /**
     * @param message 
     * @param token 
     * Método responsável por enviar uma notificação para o 
     * usuário do chat
     */
    public sendPushMsg(user: string, message: string, cpf: string) {
        try {
            if (cpf.includes('/')) {
                cpf = cpf.replace('/', '');
            }
            if (cpf.includes('-')) {
                cpf = cpf.replace('-', '');
            }
            if (cpf.includes('.')) {
                cpf = cpf.replace('.', '');
            }
            if (cpf.includes('.')) {
                cpf = cpf.replace('.', '');
            }

            let cpfUsuario = parseFloat(cpf);

            this.firebaseService.db.collection("users_token").where("cpf", "==", cpfUsuario).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const document = doc.data();
                    if (document !== undefined && document !== null) {
                        this.sendPush(user, message, document.token);
                    }
                });
            }).catch((error) => {
                console.log("🚀 ~ file: firebase.service.ts:172 ~ FirebaseService ~ getTokenUser ~ error:", error);
            })
        } catch (error) {
            console.log("🚀 ~ -------ERROR AO CHAMAR O MÉTODO DE ENVIO DE NOTIFICAÇÕES PUSH-------", error);
        }
    }


    /**
     * @param user 
     * @param message 
     * @param token 
     * Efetua o envio da notificação push
     */
    public sendPush(user: string, message: string, token: any) {
        try {
            let url = 'https://fcm.googleapis.com/fcm/send';
            let body =
            {
                "to": token,
                "notification": {
                    "title": user,
                    "body": message,
                    "mutable_content": true,
                    "sound": "Tri-tone",
                    "click_action": 'chat'
                },

                "data": {
                    "url": "<url of media image>",
                    "dl": "<deeplink action on tap of notification>"
                }
            };
            let headers: Headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'key=AAAAPc5T_6w:APA91bHX2WHMQuSXgjFawZJr1gduu1jLo-4Fcizr9at5bypqR_E7AFzE0nQfX86a-Go4kj8ZifhmC5zV_Fvh2fRvWoiW4eBWHCkZ85cglgxs0Gjd02eTSTfMg2g7S9n-1A9HH5m93W7y'
            });
            let options = new RequestOptions({ headers: headers });

            this.http.post(url, body, options).subscribe(response => {
                console.log("🚀 ~ -------NOTIFICAÇÃO PUSH ENVIADA COM SUCESSO!-------", response);
            }, error => {
                console.log("🚀 ~ -------ERROR AO ENVIAR UMA NOTIFICAÇÃO PUSH-------", error);
            });
        } catch (error) {
            console.log("🚀 ~ -------ERROR AO CHAMAR O MÉTODO DE ENVIO DE NOTIFICAÇÕES PUSH-------", error);
        }
    }

}
