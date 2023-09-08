import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./autentication/autentication.module').then(m => m.AutenticationModule),
        pathMatch: 'full'
    },
    {
        path: 'chat-room',
        loadChildren: () => import('./chat-room/chat-room.module').then(m => m.ChatRoomPageModule),
        pathMatch: 'full'
    },
    {
        path: 'modal-newchat',
        loadChildren: () => import('./modal-newchat/modal-newchat.module').then(m => m.ModalNewchatPageModule),
        pathMatch: 'full'
    },  {
    path: 'send-global-message',
    loadChildren: () => import('./send-global-message/send-global-message.module').then( m => m.SendGlobalMessagePageModule)
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
