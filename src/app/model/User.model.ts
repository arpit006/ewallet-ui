import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormModel, FormData} from '../common/form.model';

// noinspection TypeScriptValidateTypes
export class UserFormData implements FormData<UserModel> {
  private walletBalance: number;

  constructor(walletBalance: number) {
    this.walletBalance = walletBalance;
  }
}

// noinspection JSAnnotator
export class UserModel implements FormModel<UserModel, UserFormData> {
  uuid: string;
  name: string;
  userName: string;
  mobileNo: string;
  email: string;
  walletBalance: number;
  password: string;

  constructor() {}

  constructor(data: any) {
    this.uuid = data.uuid;
    this.userName = data.userName;
    this.name = data.name;
    this.email = data.email;
    this.mobileNo = data.mobileNo;
    this.walletBalance = data.walletBalance;
    this.password = data.password;
  }

  buildForm(formBuilder: FormBuilder, formData: UserFormData): FormGroup {
    return formBuilder.group({
      name: new FormControl(this.name,  [Validators.minLength(3), Validators.required]),
      email: new FormControl(this.email, [Validators.email, Validators.required]),
      mobileNo: new FormControl(this.mobileNo, [Validators.maxLength(10), Validators.required, Validators.pattern('[0-9]*')]),
      userName: new FormControl(this.userName, Validators.required),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9]*')])
    });
  }

  buildModel(formGroup: FormGroup, formData: UserFormData): UserModel {
    this.name = formGroup.controls['name'].value;
    this.email = formGroup.controls['email'].value;
    this.mobileNo = formGroup.controls['mobileNo'].value;
    this.userName = formGroup.controls['userName'].value;
    this.password = formGroup.controls['password'].value;
    this.walletBalance = 0;
    return this;
  }

}

