import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAgentComponent } from './dashboard-agent/dashboard-agent.component';
import { SchedulesUsersComponent } from './dashboard-agent/schedules-users/schedules-users.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'agent',
    component: DashboardAgentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'schedules-users',
    component: SchedulesUsersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
