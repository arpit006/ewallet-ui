import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserFormData, UserModel} from '../model/User.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SignupService} from './service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userModel: UserModel = new UserModel();
  userForm: FormGroup;
  signedup = true;
  submitted = false;

  @Output()
  usernames: EventEmitter<string> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private signUpService: SignupService) {
    // this.userForm = this.userModel.buildForm(this.formBuilder, new UserFormData(0));

  }

  ngOnInit() {
    this.userForm = this.userModel.buildForm(this.formBuilder, new UserFormData(0));
  }

  onSave() {
    if (this.userForm.valid) {
      this.signedup = false;
      this.submitted = true;
      this.userModel.buildModel(this.userForm, new UserFormData(0));
      this.signUpService.signUpUser(this.userModel).subscribe();
      this.usernames.emit(this.userModel.userName);
    }
  }
}
