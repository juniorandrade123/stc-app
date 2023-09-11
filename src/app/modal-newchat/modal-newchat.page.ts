import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController, LoadingController, AlertController, PopoverController } from '@ionic/angular';
import { DependentHolderFilterDto } from '../dependent/model/dependent-holder-filter-dto';
import { RequestService } from '../core/request-help/request-service';
import { ChatRoomPage } from '../chat-room/chat-room.page';
import { FilterChatModalComponent } from '../components/filter-chat-modal/filter-chat-modal.component';
import { FirebaseService } from '../service/firebase/firebase.service';
import { SendGlobalMessagePage } from '../send-global-message/send-global-message.page';

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
    public setAllUsersSendMessage: boolean = false;

    constructor(
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public service: RequestService,
        public toastController: ToastController,
        public loadingController: LoadingController,
        public alertController: AlertController,
        public modalController: ModalController,
        private firebaseService: FirebaseService,
        private popoverController: PopoverController,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.user = JSON.parse(localStorage.getItem("user"));
    }

    public async ngOnInit() {
        this.listUsersSendMessage = [];
        this.setAllUsersSendMessage = false;
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
                        result['userChecked'] = false;
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
     * @param mensageiro 
     * Método que colocar o usuário na lista de
     *  mensagens globais
     */
    public setSendMenssage(mensageiro: any) {
        try {
            this.listUsersSendMessage = [];

            if (mensageiro['userChecked']) {
                mensageiro['userChecked'] = false;
            } else {
                mensageiro['userChecked'] = true;
            }

            this.mensageiros.forEach((item) => {
                if (item['userChecked']) {
                    this.listUsersSendMessage.push(item.patient)
                }
            });

            this.changeDetectorRef.detectChanges();
        } catch (error) {
            console.log("🚀 ~ file: modal-newchat.page.ts:222 ~ ModalNewchatPage ~ setSendMenssage ~ error:", error);
        }
    }

    /**
     * Método responsável por abrir o modal
     * com o componente de envio de 
     * menssagem global
     */
    public async openSendGlobalMessage() {
        try {
            if (this.listUsersSendMessage.length > 0) {
                const popover = await this.popoverController.create({
                    component: SendGlobalMessagePage,
                    translucent: true,
                    cssClass: 'popoverController',
                    componentProps: {
                        users: this.listUsersSendMessage
                    }
                });

                await popover.present();

                await popover.onDidDismiss().then(async data => {
                    console.log("🚀 ~ FECHOU POPOVER", data)
                    this.mensageiros = [];
                    this.mensageirosAux = [];
                    await this.ngOnInit();
                });
            } else {
                const toast = await this.toastController.create({
                    message: 'Selecione pelo menos um usuário!',
                    duration: 3000,
                    position: 'bottom',
                    cssClass: 'toast-css'
                });
                toast.present();
            }
        } catch (error) {
            console.log("🚀 ~ file: modal-newchat.page.ts:249 ~ ModalNewchatPage ~ openSendGlobalMessage ~ error:", error);
        }
    }

    /**
     * Método responsável por marcar todos os usuários
     * para envio da menssagem global
     */
    public setAllSendMenssage() {
        try {
            this.listUsersSendMessage = [];

            if (this.setAllUsersSendMessage) {
                this.mensageiros.forEach((item) => {
                    item['userChecked'] = false;
                });

                this.setAllUsersSendMessage = false;
                this.changeDetectorRef.detectChanges();

            } else {
                this.mensageiros.forEach((item) => {
                    item['userChecked'] = true;
                    this.listUsersSendMessage.push(item.patient)
                });

                this.setAllUsersSendMessage = true;
                this.changeDetectorRef.detectChanges();
            }

        } catch (error) {
            console.log("🚀 ~ file: modal-newchat.page.ts:298 ~ ModalNewchatPage ~ setAllSendMenssage ~ error:", error);
        }
    }
}
