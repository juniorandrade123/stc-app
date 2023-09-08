import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingRoutingModule } from './scheduling-routing.module';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
import { DetailComponent } from './detail/detail.component';
import { CancelComponent } from './cancel/cancel.component';
import { ModalCancelComponent } from './cancel/modal-cancel/modal-cancel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransportComponent } from './detail/transport/transport.component';
import { FilterDateModalComponent } from '../components/filter-date-modal/filter-date-modal.component';


@NgModule({
  declarations: [ListComponent, DetailComponent, CancelComponent, ModalCancelComponent, TransportComponent, FilterDateModalComponent],
  imports: [
    CommonModule,
    SchedulingRoutingModule,
    IonicModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SchedulingModule { }
