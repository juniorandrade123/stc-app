import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RequestService } from 'src/app/core/request-help/request-service';
import { LoadingOn, LoadingOnDidDismiss } from 'src/app/core/util/loading';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  card = {
  };

  idScheduling: number;
  user = JSON.parse(localStorage.getItem('user'));
  quiz: any[] = [];
  loading: any;

  mockTransport = JSON.parse(localStorage.getItem('transport'));

  constructor(
    private router: Router,
    private routeSub: ActivatedRoute,
    private service: RequestService,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.routeSub.params.subscribe(params => {
      this.idScheduling = params['scheduling'];

      this.getCard(this.idScheduling);

      this.service.get('Question/GetQuizEvaluationQuery?schedulingID=' + this.idScheduling).subscribe(
        (result: any) => {
          this.quiz = result;
          if (!isNullOrUndefined(this.quiz))
            localStorage.setItem('quiz', JSON.stringify(result));
        });
    })
  }

  async presentLoading() {
    await LoadingOn(this.loadingController);    
  }

  async getCard(id) {
    await this.presentLoading();
    this.service.get('scheduling/getSchedulingAppById?idScheduling=' + Number(id))
      .subscribe(async (result: any) => {
        await LoadingOnDidDismiss(this.loadingController);
        this.card = result;
      },
        async (err) => {
          await LoadingOnDidDismiss(this.loadingController);
          console.error(err);
        })
  }

  start() {
    this.routeSub.params.subscribe(params => {
      this.router.navigateByUrl('question/' + params['scheduling']);
    })
  }

}
