import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AuthGuard } from '../core/auth/auth.guard';


const routes: Routes = [
  {
    path: 'list-user',
    component: ListUserComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListUserAgentRoutingModule { }
