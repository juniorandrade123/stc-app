import {
  Component,
  OnInit,
  ɵCompiler_compileModuleSync__POST_R3__,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RequestService } from "src/app/core/request-help/request-service";
import { LoadingController, ToastController } from "@ionic/angular";
import { isNullOrUndefined } from "util";
import { isNil } from "lodash";

import * as moment from "moment";
import { PatientPostedDTO } from "../model/patient-posted-dto";
import { LoadingOn, LoadingOnDidDismiss } from "../../../core/util/loading";

@Component({
  selector: "app-personal-data",
  templateUrl: "./personal-data.component.html",
  styleUrls: ["./personal-data.component.scss"],
})
export class PersonalDataComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("user"));
  dependent = JSON.parse(localStorage.getItem("dependent"));
  loading: any;
  formPersonal: FormGroup;
  states: any[] = [];
  citys: any[] = [];
  patient: any;

  constructor(
    private builder: FormBuilder,
    private requestService: RequestService,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.createForm();
    this.getDataUser();
  }

  createForm = () => {
    this.formPersonal = this.builder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      date: ["", Validators.required],
      sexo: ["", Validators.required],
      end: ["", Validators.required],
      estado: ["", Validators.required],
      city: ["", Validators.required],
      number: ["", Validators.required],
      cep: ["", Validators.required],
      district: ["", Validators.required],
      phone: ["", Validators.required],
    });

    this.formPersonal.disable();
  };

  populateDto = (): PatientPostedDTO => {
    var obj = new PatientPostedDTO();

    obj.name = this.formPersonal.controls.name.value;
    obj.dateBirth = this.formPersonal.controls.date.value;
    obj.idGender = this.formPersonal.controls.sexo.value;
    obj.email = this.formPersonal.controls.email.value;
    obj.cpf = isNil(this.dependent)
      ? this.user.cpf
      : this.dependent.patient.cpf;
    obj.rg = this.patient.cpf;
    obj.cnh = this.patient.cnh;
    obj.sus = this.patient.sus;
    obj.phone = this.formPersonal.controls.phone.value;
    obj.zipCode = this.formPersonal.controls.cep.value;
    obj.street = this.formPersonal.controls.end.value;
    obj.number = this.formPersonal.controls.number.value;
    obj.district = this.formPersonal.controls.district.value;

    if (
      this.patient.city.name.toUpperCase() ===
      this.formPersonal.controls.city.value.toUpperCase()
    ) {
      obj.idCity = this.patient.idCity;
      obj.city = this.patient.city.name.toUpperCase();
      obj.idState = this.patient.city.state;
    } else {
      obj.city = this.formPersonal.controls.city.value.toUpperCase();
      obj.state = this.formPersonal.controls.estado.value;
    }

    return obj;
  };

  alterData(change: boolean) {
    if (change) {
      this.formPersonal.enable();
      this.formPersonal.controls.end.disable();
      this.formPersonal.controls.estado.disable();
      this.formPersonal.controls.end.disable();
      this.formPersonal.controls.district.disable();
      this.formPersonal.controls.city.disable();
    } else {
      this.formPersonal.disable();
    }
  }

  getCep = (cep: string) => {
    LoadingOn(this.loadingController);
    this.requestService.get(cep + "/json/unicode/").subscribe(
      async (node: any) => {
        LoadingOnDidDismiss(this.loadingController);
        this.formPersonal.controls.end.setValue(node.logradouro);
        this.formPersonal.controls.estado.setValue(node.uf);
        this.formPersonal.controls.district.setValue(node.bairro);
        this.formPersonal.controls.city.setValue(node.localidade);        
      },
      (err) => {
        console.error(err);
        this.presentToast(
          "Nenhum endereço foi encontrado no cadastro.",
          "danger"
        );
      }
    );
  };

  populateForm(data: any) {
    this.formPersonal.controls.name.setValue(data.name);
    this.formPersonal.controls.email.setValue(data.email);
    const formtDate = moment(data.dateBirth).format("yyyy-MM-DD");
    this.formPersonal.controls.date.setValue(formtDate);
    this.formPersonal.controls.sexo.setValue(data.gender.toString());
    this.formPersonal.controls.number.setValue(data.address.number);
    this.formPersonal.controls.cep.setValue(data.address.zipCode);

    if (data.phoneSet.length > 0)
        this.formPersonal.controls.phone.setValue(data.phoneSet[0].number);

    if (!isNullOrUndefined(data.address) && !isNullOrUndefined(data.city)) {
      this.formPersonal.controls.end.setValue(data.address?.street);
      this.formPersonal.controls.estado.setValue(data.city?.state);
      this.formPersonal.controls.district.setValue(data.address?.district);
      this.formPersonal.controls.city.setValue(data.city?.name);
    } else {
      this.getCep(data.address.zipCode);
    }
  }

  async presentToast(title: string, type: string) {
    const toast = await this.toastController.create({
      message: title,
      duration: 4000,
      color: type,
    });
    toast.present();
  }

  async getDataUser() {
    await LoadingOn(this.loadingController);
    let cpf = isNil(this.dependent)
      ? this.user.cpf.replace(".", "").replace(".", "").replace("-", "")
      : this.dependent.patient.cpf;
    this.requestService.get("Patient/getPatientByCpf?cpf=" + cpf).subscribe(
      async (node: any) => {
        this.patient = node;
        this.populateForm(node);
        await this.getStates();

        LoadingOnDidDismiss(this.loadingController);
      },
      (err) => {
        LoadingOnDidDismiss(this.loadingController);
        console.error(err);
      }
    );
  }

  async getStates() {
    await this.requestService.get("Address/GetStates").subscribe(
      async (node: any) => {
        const consulting = node.find(
          (a) => a.id === this.formPersonal.controls.estado.value
        );
        if (!isNullOrUndefined(consulting)) {
          this.formPersonal.controls.estado.setValue(consulting.description);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  alterDataUser = () => {
    LoadingOn(this.loadingController);
    this.requestService
      .put("Patient/alterPatientApp/" + this.patient.idUser,
        JSON.stringify(this.populateDto())
      )
      .subscribe(
        async (node) => {
          await LoadingOnDidDismiss(this.loadingController);
          this.alterData(false);
          this.presentToast("Dados alterados com sucesso.", "success");
          this.getDataUser();
        },
        async (err) => {
          await LoadingOnDidDismiss(this.loadingController);
          this.presentToast(
            "Ocorreu um problema ao alterar os dados.",
            "danger"
          );
        }
      );
  };
}
