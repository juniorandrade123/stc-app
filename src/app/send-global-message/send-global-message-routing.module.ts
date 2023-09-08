import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendGlobalMessagePage } from './send-global-message.page';

const routes: Routes = [
  {
    path: '',
    component: SendGlobalMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendGlobalMessagePageRoutingModule {}
