import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FirstAccessComponent } from './first-access/first-access.component';
import { DualPersonaComponent } from './dual-persona/dual-persona.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { ConfigurationComponent } from './configuration/configuration.component';
import { PersonalDataComponent } from './configuration/personal-data/personal-data.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dual',
    component: DualPersonaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'first-access',
    component: FirstAccessComponent
  },
  {
    path: 'configuration',
    component: ConfigurationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'personal-data',
    component: PersonalDataComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticationRoutingModule { }
