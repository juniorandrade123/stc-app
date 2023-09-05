import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RequestService } from "src/app/core/request-help/request-service";
import { ToastController, LoadingController, ModalController, Platform } from "@ionic/angular";
import { UserPushTokenDto } from "../dashboard/model/user-push-token-dto";
import { LoadingOn, LoadingOnDidDismiss } from "../../core/util/loading";
import { ModalNewchatPage } from "src/app/modal-newchat/modal-newchat.page";
import { DependentHolderFilterDto } from "src/app/dependent/model/dependent-holder-filter-dto";
import { FirebaseService } from "src/app/service/firebase/firebase.service";

@Component({
    selector: "app-dashboard-agent",
    templateUrl: "./dashboard-agent.component.html",
    styleUrls: ["./dashboard-agent.component.scss"],
})
export class DashboardAgentComponent implements OnInit {
    user = JSON.parse(localStorage.getItem("user"));
    isLoading: boolean = false;
    loading: any;
    countUser = 0;

    /**Variável que recebe a quantidade de mensagens aguardando ser respondidas */
    public amountOfMessages: number = 0;

    /**Variável responsável por receber a lista de mensageiros para ser exibida a quantidade
     * de novas mensagens disponíveis para o usuário
     */
    public listaMensageiros: any = [];

    constructor(
        private router: Router,
        private service: RequestService,
        private toastController: ToastController,
        private loadingController: LoadingController,
        private modalController: ModalController,
        private firebaseService: FirebaseService,
        private platform: Platform) { }

    public async ngOnInit() {
        await LoadingOn(this.loadingController);
        await this.getNewsmensagens();
        await this.getCountUserAgent();
        await this.saveDeviceToken();
    }

    async getCountUserAgent() {
        this.service
            .get("Holder/GetCountUserByUserId?userID=" + this.user.id)
            .subscribe(
                (result: any) => {
                    this.countUser = result;
                    LoadingOnDidDismiss(this.loadingController);
                },
                (error) => {
                    LoadingOnDidDismiss(this.loadingController);
                    this.presentToast("Erro ao consultar pacientes", "warning");
                }
            );
    }

    dash() {
        this.router.navigate(["/"]);
    }

    listUser() {
        this.router.navigate(["list-user"]);
    }

    listPendingUserSchedules() {
        this.router.navigate(["schedules-users"], { queryParams: { status: "WaitingConfirmation" } });
    }

    listConfirmedUserSchedules() {
        this.router.navigate(["schedules-users"], { queryParams: { status: "ConfirmedSchedule" } });
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
        await LoadingOn(this.loadingController);
    }

    public async saveDeviceToken() {
            let deviceToken = localStorage.getItem("device-token");
            let objSend = new UserPushTokenDto();
            objSend.id = this.user.id;
            objSend.pushToken = deviceToken;

            this.service
                .post("User/update-push-token", JSON.stringify(objSend))
                .subscribe(
                    (node) => { },
                    (err) => {
                        console.error(err);
                    }
                );
    }

    /**
     * @author Gustavo Teles
     * Método que abre o modal para a escolha do usuário disponível no bate papo
     * @returns 
     */
    public async showModalChat() {
        const modal = await this.modalController.create({
            component: ModalNewchatPage,
            componentProps: { data: this.user, listaMensageiros: this.listaMensageiros }
        });
        this.amountOfMessages = 0;
        this.listaMensageiros = [];
        return await modal.present();
    }

    /**
   * @author Gustavo Teles
   * Método responsável por verificar se existem mensagens 
   * que precisam ser respondidas
   */
    public async getNewsmensagens() {
        try {
            this.amountOfMessages = 0;
            this.listaMensageiros = [];
            if (this.user.typeUser === 'agente') {
                const model = new DependentHolderFilterDto();
                model.idUser = this.user.id;
                this.service.post('Holder/GetHoldersByFilter', JSON.stringify(model)).subscribe(
                    async (result: any) => {
                        for (const usuario of result) {
                            await this.countMensagens(usuario.patient);
                        }
                    }, async error => {
                        console.log("🚀 ~ file: dashboard-agent.component.ts:141 ~ DashboardAgentComponent ~ error", error);
                    });
            } else {
                this.service.get("Patient/getPatientByCpf?cpf=" + this.user.cpf).subscribe(
                    async (node: any) => {
                        this.service.get('Patient/GetHolder/' + node.idUser).subscribe(
                            async (result: any) => {
                                await this.countMensagens(result);
                            }, async error => {
                                console.log("🚀 ~ file: dashboard-agent.component.ts:150 ~ DashboardAgentComponent ~ error", error);
                            });
                    },
                    async (err) => {
                        console.log("🚀 ~ file: dashboard-agent.component.ts:154 ~ DashboardAgentComponent ~ err", err);
                    }
                );
            }
        } catch (error) {
            console.log("🚀 ~ file: dashboard-agent.component.ts:159 ~ DashboardAgentComponent ~ getNewsmensagens ~ error", error);
        }
    }

    /**
     * @author Gustavo Teles
     * @param usuario 
     * Método responsável por retornar a quantidade de 
     * novas mensagens existentes
     */
    public async countMensagens(usuario: any): Promise<number> {
        let mensagens: any = [];
        let chatKeys: any = [];
        let posicao: number = 0;
        let countMensagens: number = 0;

        const promise = new Promise(async (resolve, reject) => {
            try {
                /**AUTOR */
                let session: number = 0;
                const user = JSON.parse(localStorage.getItem("user"));
                let cpfSession = user.cpf;
                while (cpfSession.includes('/') || cpfSession.includes('-') || cpfSession.includes('.')) {
                    cpfSession = cpfSession.replace('/', '');
                    cpfSession = cpfSession.replace('-', '');
                    cpfSession = cpfSession.replace('.', '');
                }
                session = parseFloat(cpfSession);

                /**DESTINATÁRIO */
                let cpfEnvio: number = 0;
                let cpfUsuario = usuario.cpf;
                if (cpfUsuario.includes('/')) {
                    cpfUsuario = cpfUsuario.replace('/', '');
                }
                if (cpfUsuario.includes('-')) {
                    cpfUsuario = cpfUsuario.replace('-', '');
                }
                if (cpfUsuario.includes('.')) {
                    cpfUsuario = cpfUsuario.replace('.', '');
                }
                cpfEnvio = parseFloat(cpfUsuario);

                await this.firebaseService.db.collection("chatRoom")
                    .where('id', 'array-contains', session)
                    .onSnapshot((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            let data = doc.data();
                            if ((data.from == cpfEnvio && data.to == session) ||
                                (data.from == session && data.to == cpfEnvio)) {
                                if (chatKeys.indexOf(data.key) < 0) {
                                    mensagens.push(data);
                                    chatKeys.push(data.key);
                                    posicao++;
                                };
                            };

                        });

                        mensagens.sort(this.sortDate);

                        try {
                            if (mensagens[posicao - 1] !== null && mensagens[posicao - 1] !== undefined) {
                                if (parseFloat(mensagens[posicao - 1].to) !== cpfEnvio) {
                                    this.amountOfMessages++;
                                    countMensagens++
                                } else {
                                    countMensagens = 0;
                                }
                            }

                        } catch (error) {
                            console.log("🚀 ~ file: dashboard-agent.component.ts:229 ~ DashboardAgentComponent ~ .onSnapshot ~ error", error);
                        }

                        this.setNewsMensagens(cpfUsuario, countMensagens)
                        resolve(true);
                    });
            } catch (err) {
                console.log("🚀 ~ file: dashboard-agent.component.ts:236 ~ DashboardAgentComponent ~ promise ~ err", err);
                reject(err);
            }
        });

        return promise.then(res => {
            console.log("🚀 ~ file: dashboard-agent.component.ts:242 ~ DashboardAgentComponent ~ countMensagens ~ res", res);
            return this.amountOfMessages;
        });
    }

    sortDate(a, b) {
        let dateA = new Date();
        let dateB = new Date();

        try {
            dateA = new Date(a.timestamp.toDate());
        } catch (error) {
        }

        try {
            dateB = new Date(b.timestamp.toDate());
        } catch (error) {
        }

        return dateA > dateB ? 1 : -1;
    };

    formatDate(message: any) {
        const date = message['timestamp'] ? message['timestamp'].toDate() : new Date();
        return this.firebaseService.formatAMPM(date);
    }

    /**
     * @author Gustavo Teles
     * @param cpf 
     * @param amountOfMessages 
     * Método responsável por salvar a lista de mensageiros 
     * com a quantidade de mensagens disponíveis
     */
    setNewsMensagens(cpf: number, amountOfMessages: number) {
        const dados = {
            cpf: cpf,
            amountOfMessages: amountOfMessages
        }
        this.listaMensageiros.push(dados);
    }
}