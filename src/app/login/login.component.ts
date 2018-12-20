import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserFormData, UserModel} from '../model/User.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SignupService} from '../register/service/signup.service';
import {LoginModel} from '../model/Signup.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  loginForm: FormGroup;
  signedup = true;

  @Output()
  usernames: EventEmitter<string> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private signUpService: SignupService) {
    this.loginForm = this.loginModel.buildForm(this.formBuilder, new UserFormData(0));

  }

  ngOnInit() {
    this.loginForm = this.loginModel.buildForm(this.formBuilder, new UserFormData(0));
  }

  onSave() {
    if (this.loginForm.valid) {
      this.signedup = false;
      this.loginModel.buildModel(this.loginForm, new UserFormData(0));
    }
  }

}
