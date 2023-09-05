import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { DependentAddComponent } from '../dependent-add/dependent-add.component';
import { RequestService } from 'src/app/core/request-help/request-service';
import { isNil } from 'lodash';
import { DependentHolderFilterDto } from '../model/dependent-holder-filter-dto';
import { LoadingOn, LoadingOnDidDismiss } from 'src/app/core/util/loading';
import { FilterChatModalComponent } from 'src/app/components/filter-chat-modal/filter-chat-modal.component';

@Component({
    selector: "app-dependent-list",
    templateUrl: "./dependent-list.component.html",
    styleUrls: ["./dependent-list.component.scss"],
})
export class DependentListComponent implements OnInit {
    dependents: any[] = [];
    dependentsAux: any[] = [];
    user = JSON.parse(localStorage.getItem("user"));
    loading: any;
    isFilterActive = false;

    constructor(
        public modalController: ModalController,
        public service: RequestService,
        public toastController: ToastController,
        public loadingController: LoadingController,
        public alertController: AlertController
    ) { }

    ngOnInit() {
        localStorage.removeItem("dependent");
        this.getAllDependent();
    }

    getAllDependent() {
        if (!isNil(this.user)) {
            const model = new DependentHolderFilterDto();
            model.idUser = this.user.id;

            this.presentLoading();
            this.service
                .post("Dependent/GetDependentsByFilter", JSON.stringify(model))
                .subscribe(
                    async (result: any) => {
                        this.dependents = result;
                        await LoadingOnDidDismiss(this.loadingController);
                    },
                    async (error) => {
                        this.presentToast("Erro ao consultar dependentes", "warning");
                        await LoadingOnDidDismiss(this.loadingController);
                    }
                );
        }
    }

    viewDependent(item) {
        localStorage.setItem("dependent", JSON.stringify(item));
        location.href = "/";
    }

    async presentToast(title: string, type: string) {
        const toast = await this.toastController.create({
            message: title,
            duration: 2000,
            color: type,
        });
        toast.present();
    }

    async presentLoading() {
        LoadingOn(this.loadingController);
    }

    async removeDependentConfirm(dependent: any) {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Remover dependente",
            message: "Deseja realmente remover esse dependente?",
            buttons: [
                {
                    text: "Não",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: (blah) => { },
                },
                {
                    text: "Sim",
                    handler: () => {
                        this.removeDependent(dependent);
                    },
                },
            ],
        });

        await alert.present();
    }

    async removeDependent(dependent: any) {
        await this.presentLoading();
        this.service
            .get(
                "Dependent/removeDepententByPatient?patientId=" +
                this.user.id +
                "&dependentId=" +
                dependent.idUserDependent
            )
            .subscribe(
                async (node: any) => {
                    await LoadingOnDidDismiss(this.loadingController);
                    if (node)
                        this.presentToast("Dependente removido com sucesso", "success");
                    else this.presentToast("Dependente não encontrado", "warning");

                    this.getAllDependent();
                },
                async (err) => {
                    await LoadingOnDidDismiss(this.loadingController);
                    this.presentToast(
                        "Houve um error ao tentar de remover o dependente",
                        "danger"
                    );
                    console.error(err);
                }
            );
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: DependentAddComponent,
            cssClass: "my-custom-class",
        });

        modal.onDidDismiss().then(() => {
            this.ngOnInit();
        });

        return await modal.present();
    }

    /**
     * @author Gustavo Teles
     * @returns 
     * Método responsável por abrir o modal 
     * de filtros disponíveis
     */
    public async presentFilterModal() {
        const modal = await this.modalController.create({
            component: FilterChatModalComponent,
            cssClass: 'my-custom-class'
        });

        modal.onDidDismiss()
            .then(async (data) => {
                const resultFilter = data['data'];
                if (resultFilter.data !== undefined && resultFilter.data !== null) {
                    if (resultFilter.data.name !== undefined && resultFilter.data.name !== null) {
                        this.isFilterActive = true;
                        await this.executeFilter(resultFilter.data.name);
                    } else {
                        this.dependents = this.dependentsAux;
                        this.isFilterActive = false;
                    }
                } else {
                    this.dependents = this.dependentsAux;
                    this.isFilterActive = false;
                }
            });

        localStorage.setItem('typeFilter', 'holder');

        return await modal.present();
    }

    /**
     * @author Gustavo Teles
     * @param nome 
     * Método que executa o filtro informado
     */
    public async executeFilter(name: string) {
        const dependents = this.dependents;
        this.dependents = [];
        return dependents.filter(async (item) => {
            if (String(item.patient.name).toLowerCase().includes(name.toLowerCase())) {
                this.dependents.push(item);
            }
        });
    }
}
