import {Component, OnInit} from '@angular/core';
import {UserFormData, UserModel} from '../model/User.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SignupService} from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.pug',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userModel: UserModel = new UserModel();
  userForm: FormGroup;
  signedup = true;

  constructor(private formBuilder: FormBuilder, private signUpService: SignupService) {
    this.userForm = this.userModel.buildForm(this.formBuilder, new UserFormData(0));

  }

  ngOnInit() {
    this.userForm = this.userModel.buildForm(this.formBuilder, new UserFormData(0));
  }

  onSave() {
    this.signedup = false;
    this.userModel.buildModel(this.userForm, new UserFormData(0));
    this.signUpService.signUpUser(this.userModel).subscribe();
  }
}
