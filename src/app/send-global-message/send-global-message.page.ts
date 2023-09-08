import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, LoadingController, NavParams, PopoverController } from '@ionic/angular';
import { FcmService } from 'src/app/service/fcm/fcm.service';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';

/**
 * Classe responsável pelo envio global de mensagens
 * aos usuários informados
 * 
 * @author Gustavo Teles
 */

@Component({
    selector: 'app-send-global-message',
    templateUrl: './send-global-message.page.html',
    styleUrls: ['./send-global-message.page.scss'],
})
export class SendGlobalMessagePage implements OnInit {
    @Input() users: any;
    @ViewChild(IonContent, { static: true }) content: IonContent;

    public user: any;
    public chat: string;
    public unsubscribe: any;
    public messages: any = [];
    public chatKeys: any = [];
    public session: any;
    public loader: boolean = true;
    public cpfEnvio: any;

    constructor(
        public firebaseService: FirebaseService,
        public route: ActivatedRoute,
        public router: Router,
        public navParams: NavParams,
        private fcmService: FcmService,
        private popoverController: PopoverController,
        public loadingController: LoadingController) { }

    public async ngOnInit() {
        this.session = JSON.parse(localStorage.getItem("user"));
        let cpfSession = this.session.cpf;

        while (cpfSession.includes('/') || cpfSession.includes('-') || cpfSession.includes('.')) {
            cpfSession = cpfSession.replace('/', '');
            cpfSession = cpfSession.replace('-', '');
            cpfSession = cpfSession.replace('.', '');
        }

        this.session = parseFloat(cpfSession);
    }

    public async closeModal() {
        this.popoverController.dismiss();
    }

    public async sendChat() {
        const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Enviando...',
            duration: 2000000
        });
        await loading.present();

        try {
            if (this.chat) {
                for (const user of this.users) {
                    let cpfUsuario = user.cpf;
                    if (cpfUsuario.includes('/')) {
                        cpfUsuario = cpfUsuario.replace('/', '');
                    }
                    if (cpfUsuario.includes('-')) {
                        cpfUsuario = cpfUsuario.replace('-', '');
                    }
                    if (cpfUsuario.includes('.')) {
                        cpfUsuario = cpfUsuario.replace('.', '');
                    }
                    this.cpfEnvio = parseFloat(cpfUsuario);

                    const loggedInUser = JSON.parse(localStorage.getItem("user"));
                    this.fcmService.sendPushMsg(loggedInUser.user, this.chat, user.cpf);
                    this.firebaseService.sendMsg(this.cpfEnvio, this.cpfEnvio, this.session, this.chat);
                }
                await loading.dismiss();
                await this.closeModal();
            }
            this.chat = '';
        } catch (error) {
            console.log("🚀 ~ file: send-global-message.page.ts:81 ~ SendGlobalMessagePage ~ sendChat ~ error:", error);
            await loading.dismiss();
        }
    }

    sortDate(a, b) {
        let dateA = new Date();
        let dateB = new Date();

        try {
            dateA = new Date(a.timestamp.toDate());
        } catch (error) {
        }

        try {
            dateB = new Date(b.timestamp.toDate());
        } catch (error) {
        }

        return dateA > dateB ? 1 : -1;
    };

    formatDate(message: any) {
        const date = message['timestamp'] ? message['timestamp'].toDate() : new Date();
        return this.firebaseService.formatAMPM(date);
    }

}
