import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormModel, FormData} from '../common/form.model';

// noinspection TypeScriptValidateTypes
export class LoginFormData implements FormData<LoginModel> {

}

// noinspection JSAnnotator
export class LoginModel implements FormModel<LoginModel, LoginFormData> {
  uuid: string;
  name: string;
  email: string;
  mobileNo: string;
  walletBalance: string;
  userName: string;
  password: string;

  constructor() {
  }

  constructor(data: any) {
    this.userName = data.userName;
    this.name = data.name;
    this.email = data.email;
    this.walletBalance = data.walletBalance;
    this.mobileNo = data.mobileNo;
    this.uuid = data.uuid;
  }

  buildForm(formBuilder: FormBuilder, formData: LoginFormData): FormGroup {
    return formBuilder.group({
      userName: new FormControl(this.userName, Validators.required),
      password: new FormControl(this.password, [Validators.required])
    });
  }

  buildModel(formGroup: FormGroup, formData: LoginFormData): LoginModel {
    this.userName = formGroup.controls['userName'].value;
    this.password = formGroup.controls['password'].value;
    return this;
  }

}

