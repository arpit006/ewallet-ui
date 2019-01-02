import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {LoginModel} from '../../model/Login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiVersion = environment.baseUrl;
  loginUrl = this.apiVersion + '/ewallet/login';

  constructor(private http: HttpClient) {
  }

  loginUser(username: string, password: string): Observable<LoginModel> {
    return this.http.get<LoginModel>(this.loginUrl + '/' + username + '/' + password);
  }
}
