import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { DetailComponent } from './detail/detail.component';
import { QuestionComponent } from './question/question.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [
  {
    path: 'question-scheduling/:scheduling',
    component: DetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'question/:scheduling',
    component: QuestionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'thank-you',
    component: ThankYouComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
