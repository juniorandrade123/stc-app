import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { isNil } from 'lodash';

/**
 * Classe responsável pela caixa de opções de filtros do chat virtual
 * @author Gustavo Teles
 */

@Component({
    selector: 'app-filter-chat-modal',
    templateUrl: './filter-chat-modal.component.html',
    styleUrls: ['./filter-chat-modal.component.scss'],
})
export class FilterChatModalComponent implements OnInit {
    public form: FormGroup;

    constructor(
        private modalCtrl: ModalController,
        private builder: FormBuilder,
        public toastController: ToastController) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.form = this.builder.group({
            name: [null]
        });

        const filter = localStorage.getItem('filterChatModal');

        if (!isNil(filter)) {
          const form = JSON.parse(filter);
          this.form.controls.name.setValue(form.name);
        }
    }

    applyFilter() {
        const dados = {
            name: this.form.controls.name.value
        }
        localStorage.setItem('filterChatModal', JSON.stringify(dados));
        this.dismiss(dados);
    }

    cleanFilter() {
        localStorage.removeItem('filterChatModal');
        this.dismiss(null);
    }

    dismiss(result?: any) {
        if (isNil(result)) {
            localStorage.removeItem('filterChatModal');
          }
        this.modalCtrl.dismiss({
            'data': result,
            'dismissed': true
        });
    }

    async presentToast(title: string, type: string) {
        const toast = await this.toastController.create({
            message: title,
            duration: 2000,
            color: type
        });
        toast.present();
    }
}
