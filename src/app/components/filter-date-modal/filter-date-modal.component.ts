import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { isNil } from 'lodash';

@Component({
    selector: 'app-filter-date-modal',
    templateUrl: './filter-date-modal.component.html',
    styleUrls: ['./filter-date-modal.component.scss'],
})
export class FilterDateModalComponent implements OnInit {
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
            startDate: [null],
            endDate: [null]
        });

        const filter = localStorage.getItem('filterDateModal');

        if (!isNil(filter)) {
            const form = JSON.parse(filter);
            this.form.controls.startDate.setValue(form.startDate);
            this.form.controls.endDate.setValue(form.endDate);
        }
    }

    applyFilter() {
        const dados = {
            startDate: this.form.controls.startDate.value,
            endDate: this.form.controls.endDate.value
        }
        localStorage.setItem('filterDateModal', JSON.stringify(dados));
        this.dismiss(dados);
    }

    cleanFilter() {
        localStorage.removeItem('filterDateModal');
        this.dismiss(null);
    }

    dismiss(result?: any) {
        if (isNil(result)) {
            localStorage.removeItem('filterDateModal');
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
