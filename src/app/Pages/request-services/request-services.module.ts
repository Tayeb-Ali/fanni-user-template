import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestServicesPageRoutingModule } from './request-services-routing.module';

import { RequestServicesPage } from './request-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestServicesPageRoutingModule
  ],
  declarations: [RequestServicesPage]
})
export class RequestServicesPageModule {}
