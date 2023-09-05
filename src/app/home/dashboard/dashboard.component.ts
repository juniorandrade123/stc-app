import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/core/request-help/request-service';
import { SchedulingDTO } from './model/scheduling-dto';
import { Router } from '@angular/router';
import { isNil } from 'lodash';
import { UserPushTokenDto } from './model/user-push-token-dto';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { ModalNewchatPage } from 'src/app/modal-newchat/modal-newchat.page';
import { DependentHolderFilterDto } from 'src/app/dependent/model/dependent-holder-filter-dto';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    user = JSON.parse(localStorage.getItem("user"));
    userName = "";
    scheduling: SchedulingDTO[] = [];
    isLoading: boolean = false;
    isDependent = false;
    countUser = 0;

    /**Variável que recebe a quantidade de mensagens aguardando ser respondidas */
    public amountOfMessages: number = 0;

    /**Variável responsável por receber a lista de mensageiros para ser exibida a quantidade
     * de novas mensagens disponíveis para o usuário
     */
    public listaMensageiros: any = [];

    constructor(
        private serviceHelp: RequestService,
        private router: Router,
        public alertController: AlertController,
        private modalController: ModalController,
        private firebaseService: FirebaseService,
        private platform: Platform) { }

    public async ngOnInit() {
        this.isLoading = true;
        await this.getNewsmensagens();
        await this.getMyDependent();
        await this.saveDeviceToken();
        this.isLoading = false;
    }

    public async getMyDependent() {
        let local = localStorage.getItem("dependent");

        if (!isNil(local)) {
            if (JSON.parse(local).patient.cpf === this.user.cpf) {
                local = null;
                localStorage.removeItem("dependent");
            }
        }

        if (!isNil(local)) {
            this.userName = JSON.parse(local).patient.name;
            this.isDependent = true;
            this.getScheduling(
                JSON.parse(local)
                    .patient.cpf.replace(".", "")
                    .replace(".", "")
                    .replace("-", "")
            );
        } else {
            this.userName = this.user.user;
            this.getCountUserAgent();
        }
    }

    getCountUserAgent() {
        this.serviceHelp
            .get("Dependent/GetCountUserByUserId?userID=" + this.user.id)
            .subscribe(
                (result: any) => {
                    this.countUser = result;
                    this.getScheduling();
                },
                (error) => {
                    console.error(error);
                }
            );
    }

    getScheduling(cpf?: string) {
        this.serviceHelp
            .get(
                "scheduling/schedulingByUser?cpfUser=" +
                (isNil(cpf)
                    ? this.user.cpf.replace(".", "").replace(".", "").replace("-", "")
                    : cpf.replace(".", "").replace(".", "").replace("-", ""))
            )
            .subscribe(
                (node: any[]) => {
                    this.scheduling = node.filter(
                        (a) =>
                            a.descActive === "AGUARDANDO CONFIRMAÇÃO" ||
                            a.descActive === "CONFIRMADO AGENDAMENTO"
                    );
                    //this.saveDeviceToken();
                },
                (err) => {
                    console.error(err);
                }
            );
    }

    myScheduling() {
        if (this.isDependent) {
            localStorage.setItem(
                "dependenteHolder",
                localStorage.getItem("dependent")
            );
        }

        location.href = "/list";
    }

    myDependent() {
        this.router.navigate(["dependent-list"]);
    }

    agent() {
        localStorage.removeItem("dependent");
        this.router.navigate(["/agent"]);
    }

    myInfos() {
        localStorage.removeItem("dependent");
        location.reload();
    }

    public async saveDeviceToken() {
        let deviceToken = localStorage.getItem("device-token");
        let objSend = new UserPushTokenDto();
        objSend.id = this.user.id;
        objSend.pushToken = deviceToken;

        this.serviceHelp
            .post("User/update-push-token", JSON.stringify(objSend))
            .subscribe(
                (node) => { },
                (err) => {
                    console.error(err);
                }
            );
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Próximo Agendamento",
            message: "Nenhum agendamento foi encontrado",
            buttons: ["OK"],
        });

        await alert.present();
    }

    async detail(id: any) {
        if (!isNil(id)) {
            this.router.navigate(["/detail/" + id]);
        } else {
            await this.presentAlert();
        }
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
                this.serviceHelp.post('Holder/GetHoldersByFilter', JSON.stringify(model)).subscribe(
                    async (result: any) => {
                        for (const usuario of result) {
                            await this.countMensagens(usuario.patient);
                        }
                    }, async error => {
                        console.log("🚀 ~ file: dashboard.component.ts:205 ~ DashboardComponent ~ error", error);
                    });
            } else {
                this.serviceHelp.get("Patient/getPatientByCpf?cpf=" + this.user.cpf).subscribe(
                    async (node: any) => {
                        this.serviceHelp.get('Patient/GetHolder/' + node.idUser).subscribe(
                            async (result: any) => {
                                await this.countMensagens(result);
                            }, async error => {
                                console.log("🚀 ~ file: dashboard.component.ts:214 ~ DashboardComponent ~ error", error);
                            });
                    },
                    async (err) => {
                        console.log("🚀 ~ file: dashboard.component.ts:218 ~ DashboardComponent ~ err", err);
                    }
                );
            }
        } catch (error) {
            console.log("🚀 ~ file: dashboard.component.ts:223 ~ DashboardComponent ~ getNewsmensagens ~ error", error);
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
                            console.log("🚀 ~ file: dashboard.component.ts:293 ~ DashboardComponent ~ .onSnapshot ~ error", error);
                        }

                        this.setNewsMensagens(cpfUsuario, countMensagens)
                        resolve(true);
                    });
            } catch (err) {
                console.log("🚀 ~ file: dashboard.component.ts:300 ~ DashboardComponent ~ promise ~ err", err);
                reject(err);
            }
        });

        return promise.then(res => {
            console.log("🚀 ~ file: dashboard.component.ts:306 ~ DashboardComponent ~ countMensagens ~ res", res);
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