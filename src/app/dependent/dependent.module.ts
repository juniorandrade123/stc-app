import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependentRoutingModule } from './dependent-routing.module';
import { DependentListComponent } from './dependent-list/dependent-list.component';
import { DependentAddComponent } from './dependent-add/dependent-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';
import { NgxMaskModule, IConfig } from 'ngx-mask'

@NgModule({
  declarations: [
    DependentListComponent,
    DependentAddComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    DependentRoutingModule,
    ReactiveFormsModule,
    BrMaskerModule,
    NgxMaskModule.forRoot()
  ]
})
export class DependentModule { }
