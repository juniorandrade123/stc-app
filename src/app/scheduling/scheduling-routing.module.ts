import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { CancelComponent } from './cancel/cancel.component';
import { TransportComponent } from './detail/transport/transport.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cancel/:id',
    component: CancelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transport/:id/:isSpecial',
    component: TransportComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulingRoutingModule { }
