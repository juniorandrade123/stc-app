import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticationRoutingModule } from './autentication-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
import { LoginComponent } from './login/login.component';
import { FirstAccessComponent } from './first-access/first-access.component';
import { IonicModule } from '@ionic/angular';
import { DualPersonaComponent } from './dual-persona/dual-persona.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { PersonalDataComponent } from './configuration/personal-data/personal-data.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { TermAcceptComponent } from './first-access/term-accept/term-accept.component';

@NgModule({
  declarations: [
    LoginComponent, 
    FirstAccessComponent,
    DualPersonaComponent,
    ConfigurationComponent,
    PersonalDataComponent,
    PasswordResetComponent,
    TermAcceptComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    AutenticationRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrMaskerModule,
    NgxMaskModule.forRoot()
  ]
})
export class AutenticationModule { }
