import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DependentListComponent } from './dependent-list/dependent-list.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { DependentAddComponent } from './dependent-add/dependent-add.component';


const routes: Routes = [
  {
    path: 'dependent-list',
    component: DependentListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dependent-add',
    component: DependentAddComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependentRoutingModule { }
