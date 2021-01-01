import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private storageService: StorageService) {
    this.form = this.fb.group({
      passengerName: ['', Validators.required],
      ticketCount: [1, Validators.required],
      bookingId: [
        '',
        [
          Validators.required, 
          Validators.minLength(6), 
          Validators.maxLength(8), 
          Validators.pattern('^[a-zA-Z]{2}[a-zA-Z0-9]+'),
        ],
      ],
    });
  }

  getLastRecord(items: []) {
    return items.length ? items[items.length - 1] : {id: 0};
  }

  submit(): void {
    this.formSubmitted = true;
    const existingBookings = this.storageService.get('flight_bookings');
    const values = this.form.value;
    values.amount = 3000 * values.ticketCount;
    if (this.form.valid) {
      values.id = this.getLastRecord(existingBookings).id + 1;
      const allBookings = [...existingBookings, values]
      this.storageService.save('flight_bookings', allBookings);
      alert('Flight Booked successfully');
      this.form.reset({
        ticketCount: 1,
      });
      this.formSubmitted = false;
    }
  }

  ngOnInit(): void {}
}
