import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {FormModel, FormData} from '../common/form.model';

// noinspection TypeScriptValidateTypes
export class UserFormData implements FormData<UserModel> {
  private walletBalance: number;

  constructor(walletBalance: number) {
    this.walletBalance = walletBalance;
  }

  /*get walletBalance(): number {
    return this.walletBalance;
  }

  set walletBalance(value: number) {
    this.walletBalance = value;
  }*/
}

// noinspection JSAnnotator
export class UserModel implements FormModel<UserModel, UserFormData> {
  uuid: string;
  name: string;
  userName: string;
  mobileNo: string;
  email: string;
  walletBalance: number;

  constructor() {}

  buildForm(formBuilder: FormBuilder, formData: UserFormData): FormGroup {
    return formBuilder.group({
      name: new FormControl(this.name),
      email: new FormControl(this.email),
      mobileNo: new FormControl(this.mobileNo),
      userName: new FormControl(this.userName)
    });  }

  buildModel(formGroup: FormGroup, formData: UserFormData): UserModel {
    this.name = formGroup.controls['name'].value;
    this.email = formGroup.controls['email'].value;
    this.mobileNo = formGroup.controls['mobileNo'].value;
    this.userName = formGroup.controls['userName'].value;
    this.walletBalance = 0;
    return this;  }

}

