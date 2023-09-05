import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PushNotificationService } from './service/push/push-notification.service';
import { FirebaseService } from './service/firebase/firebase.service';
import { FcmService } from './service/fcm/fcm.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Inbox',
            url: '/folder/Inbox',
            icon: 'mail'
        },
        {
            title: 'Outbox',
            url: '/folder/Outbox',
            icon: 'paper-plane'
        },
        {
            title: 'Favorites',
            url: '/folder/Favorites',
            icon: 'heart'
        },
        {
            title: 'Archived',
            url: '/folder/Archived',
            icon: 'archive'
        },
        {
            title: 'Trash',
            url: '/folder/Trash',
            icon: 'trash'
        },
        {
            title: 'Spam',
            url: '/folder/Spam',
            icon: 'warning'
        }
    ];
    public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    private VAPID_PUBLIC: string = "BHifWlroi04Vm5W9gnPRZyArK1KQTb54DGhfglgzTEsOoWXliWrNuQXrnO3U8M0ljAYnvMPTLNpi-zg8lEqIzgQ";
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private swPush: SwPush,
        private pushService: PushNotificationService,
        private firebaseService: FirebaseService,
        private fcmService: FcmService
    ) {
        this.initializeApp();
        this.initializePushNotification();
    }

    private initializePushNotification() {
        if (this.swPush.isEnabled) {
            this.swPush
                .requestSubscription({
                    serverPublicKey: this.VAPID_PUBLIC,
                })
                .then(subscription => {
                    this.pushService.sendSubscriptionToTheServer(subscription);
                })
                .catch(console.error);
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.overlaysWebView(false);
            this.statusBar.backgroundColorByHexString('#406AEF');
            this.splashScreen.hide();
            /**Iniciando o Google Firebase e as Notificações Push no aplicativo @author Gustavo Teles */
            this.firebaseService.configApp();
            this.fcmService.initPush();
        });
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
}
