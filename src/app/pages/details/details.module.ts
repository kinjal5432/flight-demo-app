import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DetailsComponent } from './details.component';
import { Routes, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedModule } from 'src/app/components/shared.module';

const route: Routes = [{ path: '', component: DetailsComponent }];
@NgModule({
  imports: [HttpClientModule, SharedModule, RouterModule.forChild(route)],
  exports: [],
  declarations: [DetailsComponent],
  providers: [ApiService],
})
export class DetailsModule {}
