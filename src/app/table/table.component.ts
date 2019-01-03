import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.pug',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  @Input()
  tableConfig: TableComponentConfig;

  tableDataSource: MatTableDataSource<any[]>;

  @Input()
  displayedColumns: string[] = [];

  @Input()
  displayHeaders: string[] = [];

  @ViewChild(MatTable) table: MatTable<any>;

  @Input()
  set dataSource(dataSource: MatTableDataSource<any[]>) {
    this.tableDataSource = dataSource;
    this.tableDataSource.sort = this.sort;
  }

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  enableDisableRowData = new EventEmitter<any>();

  selected: any;
  selectedRow: any;
  rows: string[] = [];
  selection = new SelectionModel<any>(true, []);
  data: any;


  getTableHeader(columnName: string) {

    const index = this.displayedColumns.indexOf(columnName);
    return this.displayHeaders[index];
  }

  highlight(event: Event, row: any) {
    if (!this.tableConfig.selectable) {
      return;
    }
    event.stopPropagation();
    this.selectedRow = row;
    this.selected = row;
  }

  deselectRow() {
    this.selectedRow = undefined;
  }

  enableDisableRow(row) {
    this.enableDisableRowData.emit(row);
  }

  deleteRow() {
    this.delete.emit(this.selected);
  }

  ngOnInit() {
  }

}

export class TableComponentConfig {
  actionButtonsEnabled: Boolean;
  selectable: Boolean;
}
