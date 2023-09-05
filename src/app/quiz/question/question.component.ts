import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { isNil } from 'lodash';
import { RequestService } from 'src/app/core/request-help/request-service';
import { LoadingOn, LoadingOnDidDismiss } from 'src/app/core/util/loading';
import { Answer } from './model/answer';
import { QuizEvaluationAppDto } from './model/quiz-evaluation-app-dto';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

  id: number;
  loading: any;
  comments: string;
  stepActual = 0;
  questions: QuizEvaluationAppDto[] = [];
  form_anonimate: FormGroup;

  constructor(
    private routeSub: ActivatedRoute,
    private router: Router,
    private service: RequestService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private alertController: AlertController,
    private form_builder: FormBuilder) { }

  ngOnInit() {
    this.createFormAnonimate();
    this.routeSub.params.subscribe(params => {
      this.id = params['scheduling'];
      const quiz = localStorage.getItem('quiz');
      if (!isNil(quiz)) {
        this.questions = JSON.parse(quiz);
      }
    })
  }

  navigateStep(step, option?: any) {
    this.stepActual = step;
    if (!isNil(option)) {
      this.checkSelectExist(step, option);
    }
  }

  checkSelectExist(step, option) {
    let options = this.questions.find(a => a.step === step - 1).options;
    options.forEach(element => {
      element.select = false;
    });
    options.find(a => a.id === option.id).select = true;
  }

  send() {
    const model: Answer[] = [];

    this.questions.forEach(question => {
      const answer = new Answer();

      const selecOption = !isNil(question.options) ? question.options.find(x => x.select) : null;
      
      answer.createdAt = new Date();
      answer.description = isNil(question.options) ? this.comments : (!isNil(selecOption) ? selecOption.name : '');
      answer.idSchedulingQuiz = question.schedulingQuizID;
      
      answer.idQuestion = question.questionID;
      answer.score = !isNil(selecOption) ? selecOption.value : 0;
      answer.anonymous = this.form_anonimate.controls.is_anonimate.value;

      model.push(answer);
    });

    this.presentLoading();
    this.service.post('Question/SaveAnswerForQuestion/' + this.id, JSON.stringify(model)).subscribe(
      async (result: boolean) => {
        await LoadingOnDidDismiss(this.loadingController);
        if (result) {
          this.router.navigateByUrl('/thank-you');
        } else {
          this.presentToast('Erro ao salvar a avaliação', 'error');
        }
      }, async error => {
        await LoadingOnDidDismiss(this.loadingController);
        this.presentToast('Erro ao salvar a avaliação', 'error');
      });
  }

  async presentToast(title: string, type: string) {
    const toast = await this.toastController.create({
      message: title,
      duration: 2000,
      color: type
    });
    toast.present();
  }

  async presentLoading() {
    LoadingOn(this.loadingController);
  }

  createFormAnonimate() {
    this.form_anonimate = this.form_builder.group({
      is_anonimate: [false]
    })
  }

}
