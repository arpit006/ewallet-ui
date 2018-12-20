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
  dataSource: TransactionDataSource;

  displayedHeaders: string[];
  displayedColumns: string[];
  tableConfig: TableComponentConfig = {actionButtonsEnabled: true , selectable: true};

  constructor(private transactionService: TransactionService) {
    this.callTransactionService();

  }

  ngOnInit() {
  }


  callTransactionService() {
    this.displayedColumns = ['sender', 'receiver' , 'amount' , 'time'];
    this.displayedHeaders = ['Sender', 'Receiver' , 'Amount' , 'Time'];
    this.transactionService.showTransactions()
      .subscribe(transactions => {this.dataSource = new TransactionDataSource(transactions[0]);
      console.log(this.dataSource); });
  }
}

export class TransactionDataSource extends MatTableDataSource<TransactionModel> {

  private transactionData: TransactionModel[];

  constructor(data: any[]) {
    super();
    this.transactionData = data;
  }

  connect(): BehaviorSubject<any> {
    return new BehaviorSubject(this.transactionData);
  }

  disconnect() {
  }

}
