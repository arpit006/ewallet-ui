import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TransactionModel} from '../../model/Transaction.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  apiVersion = environment.baseUrl;
  showAllTransactionsUrl = this.apiVersion + '/transactions';

  constructor(private http: HttpClient) {
  }

  showTransactions(): Observable<TransactionModel> {
    console.log('sevice showtransactions');
    return this.http.get<TransactionModel>(this.showAllTransactionsUrl);
  }
}
