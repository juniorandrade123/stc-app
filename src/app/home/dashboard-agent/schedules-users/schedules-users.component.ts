import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { UserPosted } from 'src/app/autentication/model/UserPosted';
import { RequestService } from 'src/app/core/request-help/request-service';
import { LoadingOn, LoadingOnDidDismiss } from 'src/app/core/util/loading';
import { AuthService } from 'src/app/core/auth/auth.service';
import { FilterDateModalComponent } from 'src/app/components/filter-date-modal/filter-date-modal.component';

@Component({
    selector: 'app-schedules-users',
    templateUrl: './schedules-users.component.html',
    styleUrls: ['./schedules-users.component.scss'],
})
export class SchedulesUsersComponent implements OnInit {
    schedulingList: any[] = [];
    schedulingListAux: any[] = [];
    isAuthenticated: boolean = false;
    user: UserPosted = null;

    /**Variáveis do filtro */
    public isFilterActive = false;
    public status: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private loadingController: LoadingController,
        private service: RequestService,
        private toastController: ToastController,
        private authService: AuthService,
        public modalController: ModalController,
    ) { }

    ngOnInit() {
        this.isAuthenticated = this.authService.loggedIn;

        this.route.queryParams.subscribe((params: Params) => {
            const status = params['status'];
            this.status = status;
            this.getAllSchedulesByDependent(status);
        });

    }

    getAllSchedulesByDependent(schedulingStatus) {
        this.presentLoading();

        if (this.isAuthenticated) {
            this.user = JSON.parse(localStorage.getItem('user'));
            const cpf = this.user.cpf.replace(".", "").replace(".", "").replace("-", "");
            this.service
                .get(`Scheduling/GetListSchedulingByDependent?cpfUser=${cpf}&schedulingStatus=${schedulingStatus}`)
                .subscribe(
                    async (result: any) => {
                        this.schedulingList = result;
                        this.schedulingListAux = result;
                        await LoadingOnDidDismiss(this.loadingController);
                    },
                    async (error) => {
                        this.presentToast("Erro ao consultar dependentes", "warning");
                        await LoadingOnDidDismiss(this.loadingController);
                    }
                );
        } else {
            LoadingOnDidDismiss(this.loadingController);
        }
    }

    async presentLoading() {
        LoadingOn(this.loadingController);
    }

    async presentToast(title: string, type: string) {
        const toast = await this.toastController.create({
            message: title,
            duration: 2000,
            color: type,
        });
        toast.present();
    }

    backDash() {
        this.router.navigate(["agent"]);
    }

    /**
        * @author Gustavo Teles
        * @returns 
        * Método responsável por abrir o modal 
        * de filtros disponíveis
        */
    public async presentModal() {
        const modal = await this.modalController.create({
            component: FilterDateModalComponent,
            cssClass: 'my-custom-class'
        });

        modal.onDidDismiss()
            .then(async (data) => {
                const resultFilter = data['data'];
                if (resultFilter.data !== undefined && resultFilter.data !== null) {
                    if ((resultFilter.data.startDate !== undefined && resultFilter.data.startDate !== null) && (resultFilter.data.endDate !== undefined && resultFilter.data.endDate !== null)) {
                        this.isFilterActive = true;
                        await this.executeFilter(resultFilter.data.startDate, resultFilter.data.endDate);
                    } else {
                        this.isFilterActive = false;
                        this.schedulingList = this.schedulingListAux;
                    }
                } else {
                    this.isFilterActive = false;
                    this.schedulingList = this.schedulingListAux;
                }
            });

        localStorage.setItem('typeFilter', 'schedulingList');

        return await modal.present();
    }

    /**
     * @author Gustavo Teles
     * @param nome 
     * Método que executa o filtro informado
     */
    public async executeFilter(startDate: string, endDate: string) {
        await this.presentLoading();
        const startDateInformado = startDate.substring(0, startDate.indexOf("T"));
        const endDateInformado = endDate.substring(0, endDate.indexOf("T"));
        if (this.isAuthenticated) {
            this.user = JSON.parse(localStorage.getItem('user'));
            const cpf = this.user.cpf.replace(".", "").replace(".", "").replace("-", "");
            this.service
                .get(`Scheduling/GetListSchedulingByDependent?cpfUser=${cpf}&schedulingStatus=${this.status}` + "&startDate=" + startDateInformado + "&endDate=" + endDateInformado)
                .subscribe(
                    async (result: any) => {
                        this.schedulingList = result;
                        await LoadingOnDidDismiss(this.loadingController);
                    },
                    async (error) => {
                        this.presentToast("Erro ao consultar dependentes", "warning");
                        await LoadingOnDidDismiss(this.loadingController);
                    }
                );
        } else {
            LoadingOnDidDismiss(this.loadingController);
        }
    }
}

