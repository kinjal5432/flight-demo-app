import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';

@NgModule({
  imports: [CommonModule],
  exports: [TableComponent, FormFieldErrorComponent],
  declarations: [TableComponent, FormFieldErrorComponent],
  providers: [],
})
export class SharedModule {}
