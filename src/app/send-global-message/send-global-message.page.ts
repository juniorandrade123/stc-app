import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, NavParams, PopoverController } from '@ionic/angular';
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
        private popoverController: PopoverController
    ) { }

    public async ngOnInit() {

    }

    public async ionViewDidEnter() {
        this.content.scrollToBottom();
    }

    public async closeModal() {
        this.popoverController.dismiss();
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
