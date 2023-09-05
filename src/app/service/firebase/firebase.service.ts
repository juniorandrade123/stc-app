import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/**
 * Classe responsável pela comunicação do aplicativo com o Google Firebase
 * @author Gustavo Teles
 */

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    loader: boolean = false;
    user: any;
    db: any;

    constructor() { }

    public configApp() {
        console.log('🚀 --------INICIANDO O GOOGLE FIREBASE--------');
        firebase.initializeApp(environment.firebase);
        this.db = firebase.firestore();
    }

    public signin(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.loader = false;

                this.user = {
                    id: email.substring(0, email.indexOf('@')).toLowerCase()
                };
                localStorage.setItem('loggedIn', this.user.id);
            })
            .catch((error) => {
                this.loader = false;
                console.log("🚀 ~ file: api.service.ts:43 ~ ApiService ~ signin ~ error", error);
            });

    }

    public signUp(name: string, email: string, password: string) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.loader = false;
                this.user = {
                    name: name,
                    id: email.substring(0, email.indexOf('@')).toLowerCase()
                };
                localStorage.setItem('loggedIn', this.user.id);

                this.db.collection("users").doc(this.user.id).set({
                    name: name,
                    id: this.user.id
                });
            })
            .catch((error) => {
                this.loader = false;
                console.log("🚀 ~ file: api.service.ts:74 ~ ApiService ~ signUp ~ error", error);
            });
    }

    public signOut() {
        firebase.auth().signOut().then(() => {
            this.user = {};
            localStorage.removeItem('loggedIn');
        }).catch((error) => {
            console.log('error while logout', error);
        });

    }

    public sendMsg(id: string, to: string, from: string, msg: string) {
        let unique = this.generateRandomString(16);

        this.db.collection("chatRoom/").doc(unique).set({
            key: this.generateRandomString(6),
            id: [to, from],
            to: (to) ? to : 'admin',
            from: (from) ? from : 'admin',
            msg: msg,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

    }

    public generateRandomString(length) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    public formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    /**
     * @param cpf 
     * @param token 
     * @returns 
     * Método responsável por salvar o token do usuário logado
     */
    public saveTokenUser(cpf: number, token: string) {
        const promise = new Promise((resolve, reject) => {
            try {
                const object = {
                    cpf: cpf,
                    token: token
                }

                this.db.collection("users_token").add(object).then(data => {
                    let returnObject =
                        [{
                            "doc": data.id
                        }];
                    this.updateTokenUser(data.id, returnObject[0]);
                    resolve(data.id);
                }, err => {
                    reject(err);
                    console.log('Erro', err);
                });
            } catch (err) {
            }
        });
        return promise.then(res => {
            console.log('Retorno ', res);
        });
    }

    /**
     * @param doc 
     * @param object 
     * Método responsável por atualizar o documento de 
     * tokens dos usuários
     */
    public updateTokenUser(doc: any, object: any) {
        this.db.collection("users_token").doc(doc).update(object);
    }


    /**
     * Salva o token do usuário logado no firebase para
     * as notificações push
     */
    public saveTokenUserFirebase() {
        let saveToken: boolean = true;
        const user = JSON.parse(localStorage.getItem("user"));
        const deviceToken = localStorage.getItem("device-token");

        let cpfUsuario = user.cpf;
        if (cpfUsuario.includes('/')) {
            cpfUsuario = cpfUsuario.replace('/', '');
        }
        if (cpfUsuario.includes('-')) {
            cpfUsuario = cpfUsuario.replace('-', '');
        }
        if (cpfUsuario.includes('.')) {
            cpfUsuario = cpfUsuario.replace('.', '');
        }
        if (cpfUsuario.includes('.')) {
            cpfUsuario = cpfUsuario.replace('.', '');
        }

        const cpf = parseFloat(cpfUsuario);

        this.db.collection("users_token").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const document = doc.data();
                if (cpf === document.cpf) {
                    if (deviceToken !== document.token) {
                        const object = {
                            token: deviceToken,
                            cpf: cpf
                        }
                        this.updateTokenUser(document.doc, object);
                    }
                    saveToken = false;

                } else if (document.token === deviceToken) {
                    const object = {
                        token: deviceToken,
                        cpf: cpf
                    }
                    this.updateTokenUser(document.doc, object);

                    saveToken = false;
                }
            });

            if (saveToken) {
                this.saveTokenUser(cpf, deviceToken);
            }
        }).catch((error) => {
            console.log("🚀 ~ file: firebase.service.ts:172 ~ FirebaseService ~ getTokenUser ~ error:", error);
        });
    }
}
