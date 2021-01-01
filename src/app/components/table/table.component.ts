import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Column {
  label: string;
  key: string;
  format?: (key: string, row: any) => string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() heading = '';
  @Input() columns: Column[] = [];
  @Input() rows = [];
  @Output() rowClickHandler: EventEmitter<any> = new EventEmitter();
  constructor() {}

  cellHtml(row: any, column: Column): string {
    if (column.format) {
      return column.format(column.key, row);
    }
    return row[column.key];
  }

  onRowClick(row: number, key: string): void {
    this.rowClickHandler.emit({ row, key });
  }

  ngOnInit(): void {}
}
