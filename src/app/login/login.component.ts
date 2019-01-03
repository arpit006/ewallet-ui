import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SignupService} from '../register/service/signup.service';
import {LoginFormData, LoginModel} from '../model/Login.model';
import {LoginService} from './service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  loginForm: FormGroup;
  signedup = true;
  errorMessage: any;

  @Output()
  usernames: EventEmitter<string> = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private signUpService: SignupService,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.loginModel.buildForm(this.formBuilder, new LoginFormData());
  }

  onSave() {
    if (this.loginForm.valid) {
      this.signedup = false;
      this.loginService.loginUser(this.loginForm.controls['userName'].value, this.loginForm.controls['password'].value)
        .subscribe(data => {
            this.loginModel = new LoginModel(data);
            console.log('Console log from login component------------------' + this.loginModel);
            this.router.navigateByUrl('/user/profile');
          },
          error => {
            this.errorMessage = error;
            console.log('error is----------------' + error);
            console.log('The error message is ----------------' + this.errorMessage);
            this.router.navigateByUrl('/login');
          });
    }
  }
}
