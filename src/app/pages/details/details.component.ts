import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { Column } from 'src/app/components/table/table.component';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  storageRows = [];
  jsonRows = [];
  columns: Column[] = [
    { key: 'passengerName', label: 'Passenger Name' },
    { key: 'bookingId', label: 'Booking Id' },
    { key: 'ticketCount', label: 'No of Tickets' },
    { key: 'amount', label: 'Amount' },
    {
      key: 'delete',
      label: 'Delete',
      format: (key, row) => {
        const html = '<span class="btn btn-danger">Delete</span>';
        return html;
      },
    },
  ];
  constructor(
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getLocalFlightDetails();
    this.getFlightDetails();
  }

  getLocalFlightDetails(): void {
    this.storageRows = this.storageService.get('flight_bookings');
  }

  getFlightDetails(): void {
    this.apiService.search('/assets/bookings.json').subscribe((response) => {
      this.jsonRows = response;
    });
  }

  filterRow(rows: any, id: number): any {
    return rows.filter((row: any) => row.id !== id);
  }

  delete(rowId: number, type: string): void {
    if (type === 'json') {
      this.jsonRows = this.filterRow(this.jsonRows, rowId);
    } else {
      this.storageRows = this.filterRow(this.storageRows, rowId);
      this.storageService.save('flight_bookings', this.storageRows);
    }
  }
  rowClick({ row, key }: { row: any; key: string }, type: string): void {
    if (key === 'delete') {
      const yesOrNo = confirm(
        `Are you sure to delete entry for Passenger: "${row.passengerName}"`
      );
      if (yesOrNo) {
        this.delete(row.id, type);
      }
    }
  }
}
