import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailComponent } from './detail/detail.component';
import { QuestionComponent } from './question/question.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


@NgModule({
  declarations: [
    DetailComponent,
    QuestionComponent,
    ThankYouComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    QuizRoutingModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class QuizModule { }
