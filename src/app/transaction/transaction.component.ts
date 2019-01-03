import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {TransactionModel} from '../model/Transaction.model';
import {BehaviorSubject} from 'rxjs';
import {TransactionService} from './services/transaction.service';
import {TableComponentConfig} from '../table/table.component';

@Component({
  selector: 'app-wallet',
  templateUrl: './transaction.component.pug',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  dataSource: TransactionDataSource = new TransactionDataSource([{}]);

  displayedColumns = [ 'sender', 'receiver' , 'amount' , 'time'];
  displayedHeaders = [ 'Sender', 'Receiver' , 'Amount' , 'Time'];

  tableConfig: TableComponentConfig = {actionButtonsEnabled: true , selectable: true};

  constructor(private transactionService: TransactionService) {
    this.callTransactionService();

  }

  ngOnInit() {
  }


  callTransactionService() {
    this.transactionService.showTransactions()
      .subscribe(transactions => this.dataSource = new TransactionDataSource(transactions));
  }
}

export class TransactionDataSource extends MatTableDataSource<TransactionModel[]> {

  private transactionData: TransactionModel[];

  constructor(data: any) {
    super();
    this.transactionData = data;
  }

  connect(): BehaviorSubject<any> {
    return new BehaviorSubject(this.transactionData);
  }

  disconnect() {
  }

}
