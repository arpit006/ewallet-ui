import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormModel, FormData} from '../common/form.model';

// noinspection TypeScriptValidateTypes
export class SignupFormData implements FormData<LoginModel> {

}

// noinspection JSAnnotator
export class LoginModel implements FormModel<LoginModel, SignupFormData> {
  userName: string;
  password: string;

  constructor() {
  }

  constructor(data: any) {
    this.userName = data.userName;
    this.password = data.password;
  }

  buildForm(formBuilder: FormBuilder, formData: SignupFormData): FormGroup {
    return formBuilder.group({
      userName: new FormControl(this.userName, Validators.required),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9]*')])
    });
  }

  buildModel(formGroup: FormGroup, formData: SignupFormData): LoginModel {
    this.userName = formGroup.controls['userName'].value;
    this.password = formGroup.controls['password'].value;
    return this;
  }

}

