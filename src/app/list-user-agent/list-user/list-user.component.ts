import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { ListUserAddComponent } from '../list-user-add/list-user-add.component';
import { RequestService } from 'src/app/core/request-help/request-service';
import { isNil } from 'lodash';
import { DependentHolderFilterDto } from 'src/app/dependent/model/dependent-holder-filter-dto';
import { FilterChatModalComponent } from 'src/app/components/filter-chat-modal/filter-chat-modal.component';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {

    isLoading: boolean = false;
    user = JSON.parse(localStorage.getItem('user'));
    holders: any[] = [];
    holdersAux: any[] = [];
    loading: any;
    isFilterActive = false;

    constructor(
        public modalController: ModalController,
        public service: RequestService,
        public toastController: ToastController,
        public loadingController: LoadingController,
        public alertController: AlertController) { }

    ngOnInit() {
        this.getAllHolders();
    }

    getAllHolders() {
        if (!isNil(this.user)) {

            const model = new DependentHolderFilterDto();
            model.idUser = this.user.id;

            this.presentLoading();
            this.service.post('Holder/GetHoldersByFilter', JSON.stringify(model)).subscribe(
                (result: any) => {
                    this.holders = result;
                    this.holdersAux = result;
                }, error => {
                    this.presentToast('Erro ao consultar pacientes', 'warning');
                });
        }
    }

    viewUser(item) {
        localStorage.setItem('user-agent', JSON.stringify(item));
        localStorage.setItem('dependenteHolder', JSON.stringify(item));
        location.href = '/list';
    }

    async userAddModal() {
        const modal = await this.modalController.create({
            component: ListUserAddComponent,
            cssClass: 'my-custom-class'
        });

        modal.onDidDismiss()
            .then(() => {
                this.ngOnInit();
            });

        return await modal.present();
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
        this.loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: 2000
        });
        await this.loading.present();
    }

    async removePatientConfirm(patient: any) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Remover paciente',
            message: 'Deseja realmente remover esse paciente da sua lista?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                    }
                }, {
                    text: 'Sim',
                    handler: () => {
                        this.removePatient(patient);
                    }
                }
            ]
        });

        await alert.present();
    }

    async removePatient(patient: any) {
        await this.presentLoading();
        this.service.get('Holder/removeUserByAgent?patientId=' + patient.idUserDependent +
            '&agentId=' + this.user.id)
            .subscribe(
                async (node: any) => {
                    await this.loading.onDidDismiss().then((dis) => {
                        if (node)
                            this.presentToast('Paciente removido com sucesso', 'success');
                        else
                            this.presentToast('Paciente não encontrado', 'warning');

                        this.getAllHolders();
                    })
                },
                async err => {
                    await this.loading.onDidDismiss().then((dis) => {
                        this.presentToast('Houve um error ao tentar de remover o Paciente', 'danger');
                        console.error(err);
                    })
                }
            )
    }

    /**
     * @author Gustavo Teles
     * @returns 
     * Método responsável por abrir o modal 
     * de filtros disponíveis
     */
    public async presentModal() {
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
                        this.holders = this.holdersAux;
                        this.isFilterActive = false;
                    }
                } else {
                    this.holders = this.holdersAux;
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
        const holders = this.holders;
        this.holders = [];
        return holders.filter(async (item) => {
            if (String(item.patient.name).toLowerCase().includes(name.toLowerCase())) {
                this.holders.push(item);
            }
        });
    }

}
