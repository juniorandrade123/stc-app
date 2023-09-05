import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, ModalController, NavParams } from '@ionic/angular';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';
import { FcmService } from '../service/fcm/fcm.service';

/**
 * Classe responsável pelo envio e recebimento de mensagens pelo app
 * @author Gustavo Teles
 */

@Component({
    selector: 'app-chat-room',
    templateUrl: './chat-room.page.html',
    styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {
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
        public modalCtrl: ModalController,
        private fcmService: FcmService
    ) {
        this.user = this.navParams.data.data;
        let cpfUsuario = this.user.cpf;
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
    }

    public async ngOnInit() {
        this.session = JSON.parse(localStorage.getItem("user"));
        let cpfSession = this.session.cpf;

        while (cpfSession.includes('/') || cpfSession.includes('-') || cpfSession.includes('.')) {
            cpfSession = cpfSession.replace('/', '');
            cpfSession = cpfSession.replace('-', '');
            cpfSession = cpfSession.replace('.', '');
        }

        this.session = parseFloat(cpfSession);
        await this.getChat();
        this.content.scrollToBottom();
    }

    public async ionViewDidEnter() {
        this.content.scrollToBottom();
    }

    public async closeModal() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }

    public async sendChat() {
        if (this.chat) {
            const loggedInUser = JSON.parse(localStorage.getItem("user"));
            this.fcmService.sendPushMsg(loggedInUser.user, this.chat, this.user.cpf);
            this.firebaseService.sendMsg(this.cpfEnvio, this.cpfEnvio, this.session, this.chat);
        }
        this.chat = '';
        this.content.scrollToBottom();
    }

    public async getChat() {
        await this.firebaseService.db.collection("chatRoom")
            .where('id', 'array-contains', this.session)
            .onSnapshot((querySnapshot) => {
                this.loader = false;
                querySnapshot.forEach((doc) => {
                    let data = doc.data();
                    if ((data.from == this.cpfEnvio && data.to == this.session) ||
                        (data.from == this.session && data.to == this.cpfEnvio)) {
                        if (this.chatKeys.indexOf(data.key) < 0) {
                            this.messages.push(data);
                            this.chatKeys.push(data.key);
                            this.content.scrollToBottom();
                        };
                    };

                });
                this.messages.sort(this.sortDate);
                console.log("🚀 ~ file: chat-room.page.ts:100 ~ ChatRoomPage ~ .onSnapshot ~ this.messages", this.messages);
            });
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
