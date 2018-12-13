import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from './model/User.model';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  apiVersion = environment.baseUrl;
  signupUrl = this.apiVersion + '/ewallet'

  constructor(private http: HttpClient) {
  }

  signUpUser(userModel: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.signupUrl, userModel);
  }
}

