import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalNewchatPage } from './modal-newchat.page';
import { NgxMaskModule } from 'ngx-mask'
import { BrMaskerModule } from 'br-mask';
import { FilterChatModalComponent } from '../components/filter-chat-modal/filter-chat-modal.component';


const routes: Routes = [
  {
    path: '',
    component: ModalNewchatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [ModalNewchatPage, FilterChatModalComponent]
})
export class ModalNewchatPageModule {}
