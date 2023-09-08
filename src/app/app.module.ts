import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutenticationModule } from './autentication/autentication.module';
import { DashboardModule } from './home/dashboard.module';
import { BrMaskerModule } from 'br-mask';
import { SchedulingModule } from './scheduling/scheduling.module';
import { QuizModule } from './quiz/quiz.module';
import { ListUserAgentModule } from './list-user-agent/list-user-agent.module';
import { DependentModule } from './dependent/dependent.module';
import { FcmService } from './service/fcm/fcm.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthService } from './core/auth/auth.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './service/token.interceptor.service ';
import { PushNotificationService } from './service/push/push-notification.service';
import { ModalNewchatPageModule } from './modal-newchat/modal-newchat.module';
import { ChatRoomPageModule } from './chat-room/chat-room.module';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpModule } from '@angular/http';
import { SendGlobalMessagePageModule } from './send-global-message/send-global-message.module';

registerLocaleData(localeBr, 'pt');

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AutenticationModule,
        BrMaskerModule,
        SchedulingModule,
        QuizModule,
        ListUserAgentModule,
        DependentModule,
        DashboardModule,
        HttpClientModule,
        HttpModule,
        ModalNewchatPageModule,
        ChatRoomPageModule,
        SendGlobalMessagePageModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            registrationStrategy: 'registerWhenStable:30000',
        })
    ],
    providers: [
        StatusBar,
        SplashScreen,
        FcmService,
        AuthService,
        FirebaseMessaging,
        HTTP,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
        JwtHelperService,
        PushNotificationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
