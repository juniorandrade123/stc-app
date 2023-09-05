import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController, ModalController } from "@ionic/angular";
import { isNil } from "lodash";
import { FilterDateModalComponent } from "src/app/components/filter-date-modal/filter-date-modal.component";
import { RequestService } from "src/app/core/request-help/request-service";
import { LoadingOn, LoadingOnDidDismiss } from "src/app/core/util/loading";
import { SchedulingStatus } from "../model/scheduling-status-enum";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"],
})

/**
 * Representa a listagem de agendamentos do usuário.
 * @constructor
 */
export class ListComponent implements OnInit {
    modAgent = null;
    user = JSON.parse(localStorage.getItem("user"));
    dependenteHolder = localStorage.getItem("dependenteHolder");

    schedulingList: any[] = [];
    schedulingListAux: any[] = [];
    loading: any;

    public isFilterActive = false;

    constructor(
        private router: Router,
        private serviceHelp: RequestService,
        public loadingController: LoadingController,
        public modalController: ModalController
    ) { }

    async ngOnInit() {
        await this.checkModAgent();
        await this.getScheduling();
    }

    async presentLoading() {
        await LoadingOn(this.loadingController);
    }

    async getScheduling() {
        await this.presentLoading();
        let cpf = "";

        if (!isNil(this.dependenteHolder)) {
            cpf = JSON.parse(this.dependenteHolder)
                .patient.cpf.replace(".", "")
                .replace(".", "")
                .replace("-", "");
        } else {
            cpf = this.user.cpf.replace(".", "").replace(".", "").replace("-", "");
        }

        this.serviceHelp
            .get("scheduling/getListSchedulingByUser?cpfUser=" + cpf)
            .subscribe(
                async (node: any[]) => {
                    this.ajustNameCard(node);
                    await LoadingOnDidDismiss(this.loadingController);
                },
                (err) => {
                    console.error(err);
                }
            );
    }

    checkModAgent() {
        if (this.modAgent == null) {
            this.modAgent = JSON.parse(localStorage.getItem("user-agent"));
        } else {
            this.modAgent = null;
        }
    }

    backDash() {
        localStorage.removeItem("dependenteHolder");
        if (this.modAgent !== null) {
            localStorage.removeItem("user-agent");
            this.router.navigate(["list-user"]);
        } else {
            localStorage.removeItem("user-agent");
            this.router.navigate(["/"]);
        }
    }

    detailOrQuiz(item: any) {
        let statusCode = Number(SchedulingStatus[item.nameStatus]);
        if (statusCode !== 2) {
            this.router.navigate(["/detail/", item.id]);
        } else {
            this.router.navigate(["/question-scheduling/", item.id]);
        }
    }

    ajustNameCard(list: any[]) {
        list.forEach((element) => {
            element.card.forEach((card) => {
                let statusCode = Number(SchedulingStatus[card.nameStatus]);
                switch (statusCode) {
                    case 2:
                        card.nameStatus = "PENDENTE DE AVALIAÇÃO";
                        break;
                }
            });
        });

        this.schedulingList = list;
        this.schedulingListAux = list;
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
        let cpf = "";

        if (!isNil(this.dependenteHolder)) {
            cpf = JSON.parse(this.dependenteHolder)
                .patient.cpf.replace(".", "")
                .replace(".", "")
                .replace("-", "");
        } else {
            cpf = this.user.cpf.replace(".", "").replace(".", "").replace("-", "");
        }

        this.serviceHelp
            .get("scheduling/getListSchedulingByUser?cpfUser=" + cpf + "&startDate=" + startDateInformado + "&endDate=" + endDateInformado)
            .subscribe(
                async (node: any[]) => {
                    this.ajustNameCard(node);
                    await LoadingOnDidDismiss(this.loadingController);
                },
                (err) => {
                    console.error(err);
                }
            );
    }
}
