import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendGlobalMessagePageRoutingModule } from './send-global-message-routing.module';

import { SendGlobalMessagePage } from './send-global-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendGlobalMessagePageRoutingModule
  ],
  declarations: [SendGlobalMessagePage]
})
export class SendGlobalMessagePageModule {}
