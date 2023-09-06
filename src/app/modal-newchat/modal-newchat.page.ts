import { Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { DependentHolderFilterDto } from '../dependent/model/dependent-holder-filter-dto';
import { RequestService } from '../core/request-help/request-service';
import { ChatRoomPage } from '../chat-room/chat-room.page';
import { FilterChatModalComponent } from '../components/filter-chat-modal/filter-chat-modal.component';
import { FirebaseService } from '../service/firebase/firebase.service';

/**
 * Classe responsável pela exibição da lista de usuários para se comunicar via chat virtual
 * @author Gustavo Teles
 */

@Component({
    selector: 'app-modal-newchat',
    templateUrl: './modal-newchat.page.html',
    styleUrls: ['./modal-newchat.page.scss'],
})

export class ModalNewchatPage implements OnInit {
    @Input() public listaMensageiros: any = [];
    public userData: any;
    public mensageiros: any = [];
    public mensageirosAux: any = [];
    public user: any;
    public loading: any;
    public isFilterActive = false;
    public listUsersSendMessage: any = [];

    constructor(
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public service: RequestService,
        public toastController: ToastController,
        public loadingController: LoadingController,
        public alertController: AlertController,
        public modalController: ModalController,
        private firebaseService: FirebaseService
    ) {
        this.user = JSON.parse(localStorage.getItem("user"));
    }

    public async ngOnInit() {
        this.listUsersSendMessage = [];
        await this.presentLoading();
        /**Salvando o token de notificação push do usuário! */
        this.firebaseService.saveTokenUserFirebase();
        if (this.user.typeUser === 'agente') {
            const model = new DependentHolderFilterDto();
            model.idUser = this.user.id;
            this.service.post('Holder/GetHoldersByFilter', JSON.stringify(model)).subscribe(
                async (results: any) => {
                    for (const result of results) {
                        for (const mensageiro of this.listaMensageiros) {
                            if (parseFloat(result.patient.cpf) === parseFloat(mensageiro.cpf)) {
                                result.patient['amountOfMessages'] = mensageiro.amountOfMessages;
                            }
                        }

                        try {
                            if (result.patient['amountOfMessages'] === null) {
                                result.patient['amountOfMessages'] = 0;
                            }
                        } catch (error) {
                            result.patient['amountOfMessages'] = 0;
                        }

                        result.patient['pushToken'] = result.pushToken;
                        this.mensageiros.push(result);
                        this.mensageirosAux.push(result);
                        this.mensageiros.sort(this.sortMensagem);
                        this.mensageirosAux.sort(this.sortMensagem);
                    }
                    await this.loading.dismiss();
                }, async error => {
                    console.log("🚀 ~ file: modal-newchat.page.ts:46 ~ ModalNewchatPage ~ ngOnInit ~ err", error);
                    await this.loading.dismiss();
                });
        } else {
            this.service.get("Patient/getPatientByCpf?cpf=" + this.user.cpf).subscribe(
                async (node: any) => {
                    this.service.get('Patient/GetHolder/' + node.idUser).subscribe(
                        async (result: any) => {
                            for (const mensageiro of this.listaMensageiros) {
                                if (parseFloat(result.cpf) === parseFloat(mensageiro.cpf)) {
                                    result['amountOfMessages'] = mensageiro.amountOfMessages;
                                }
                            }
                            this.mensageiros.push(result);
                            this.mensageirosAux.push(result);
                            await this.loading.dismiss();
                        }, async error => {
                            console.log("🚀 ~ file: modal-newchat.page.ts:62 ~ ModalNewchatPage ~ ngOnInit ~ err", error);
                            await this.loading.dismiss();
                        });
                },
                async (err) => {
                    console.log("🚀 ~ file: modal-newchat.page.ts:75 ~ ModalNewchatPage ~ err", err);
                    await this.loading.dismiss();
                }
            );
        }
    }

    public async openChat(usr: any) {
        const modal = await this.modalController.create({
            component: ChatRoomPage,
            componentProps: { data: usr }
        });
        delete usr['amountOfMessages'];
        return await modal.present();
    }

    public closeModal() {
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    }

    public async presentLoading() {
        this.loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Aguarde...',
            duration: 2000000
        });
        await this.loading.present();
    }

    public async presentToast(title: string, type: string) {
        const toast = await this.toastController.create({
            message: title,
            duration: 2000,
            color: type
        });
        toast.present();
    }

    /**
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
                        this.mensageiros = this.mensageirosAux;
                        this.isFilterActive = false;
                    }
                } else {
                    this.mensageiros = this.mensageirosAux;
                    this.isFilterActive = false;
                }
            });

        localStorage.setItem('typeFilter', 'holder');

        return await modal.present();
    }

    /**
     * @param name 
     * Método que executa o filtro informado
     */
    public async executeFilter(name: string) {
        const mensageiros = this.mensageiros;
        this.mensageiros = [];
        return mensageiros.filter(async (item) => {
            if (String(item.patient.name).toLowerCase().includes(name.toLowerCase())) {
                this.mensageiros.push(item);
            }
        });
    }

    /**
     * @param a 
     * @param b 
     * @returns 
     * Método que ordena a lista de mensageiros
     * colocando em primeiro a queles que 
     * enviaram alguma mensagem
     */
    sortMensagem(a, b) {
        const msgA = a.patient['amountOfMessages'];
        const msgB = b.patient['amountOfMessages'];
        return msgA > msgB ? -1 : 1;
    }

    /**
     * @param userInfo 
     * Método que colocar o usuário na lista de
     *  mensagens globais
     */
    public serSendMenssage(userInfo: any) {
        try {
            let userExist: boolean = false;
            this.listUsersSendMessage.forEach((item, index) => {
                if (item.cpf === userInfo.cpf.toUpperCase()) {
                    this.listUsersSendMessage.splice(index, 1);
                    userExist = true;
                }
            });

            if ((this.listUsersSendMessage.length === 0 && !userExist) || !userExist) {
                this.listUsersSendMessage.push(userInfo);
            }
        } catch (error) {
            console.log("🚀 ~ file: modal-newchat.page.ts:215 ~ ModalNewchatPage ~ serSendMenssage ~ error:", error);
        }
    }
}
