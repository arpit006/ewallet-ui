import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../model/User.model';
import {Observable} from 'rxjs';
import {TransactionModel} from '../../model/Transaction.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiVersion = environment.baseUrl;
  signupUrl = this.apiVersion + '/ewallet';

  constructor(private http: HttpClient) {
  }

  showUserProfile(usernames: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.signupUrl + '/' + usernames);
  }

}
