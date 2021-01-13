import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppoinmentDetailsPage } from './appoinment-details.page';

const routes: Routes = [
  {
    path: '',
    component: AppoinmentDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppoinmentDetailsPageRoutingModule {}
