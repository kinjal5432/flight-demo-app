import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/components/shared.module';
import { CommonModule } from '@angular/common';

const route: Routes = [{ path: '', component: BookingComponent }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
  declarations: [BookingComponent],
  providers: [],
})
export class BookingModule {}
