import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DashboardAgentComponent } from './dashboard-agent/dashboard-agent.component';
import { SchedulesUsersComponent } from './dashboard-agent/schedules-users/schedules-users.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAgentComponent,
    SchedulesUsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonicModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class DashboardModule { }
