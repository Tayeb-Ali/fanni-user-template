import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestServicesPage } from './request-services.page';

const routes: Routes = [
  {
    path: '',
    component: RequestServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestServicesPageRoutingModule {}
