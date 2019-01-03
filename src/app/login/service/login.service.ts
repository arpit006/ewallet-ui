import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {LoginModel} from '../../model/Login.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiVersion = environment.baseUrl;
  loginUrl = this.apiVersion + '/ewallet/login';

  constructor(private http: HttpClient) {
  }

  loginUser(username: string, password: string): Observable<LoginModel> {
    return this.http.get<LoginModel>(this.loginUrl + '/' + username + '/' + password).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
