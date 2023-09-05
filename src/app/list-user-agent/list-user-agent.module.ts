import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { IonicModule } from '@ionic/angular';
import { ListUserAgentRoutingModule } from './list-user-agent-routing.module';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { BrMaskerModule } from 'br-mask';
import { ListUserAddComponent } from './list-user-add/list-user-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    ListUserComponent,
    FilterModalComponent,
    ListUserAddComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ListUserAgentRoutingModule,
    BrMaskerModule,
    NgxMaskModule.forRoot()
  ]
})
export class ListUserAgentModule { }
