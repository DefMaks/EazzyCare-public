import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendorsPageRoutingModule } from './vendors-routing.module';

import { VendorsPage } from './vendors.page';
import { SingleVendorComponent } from 'src/app/components/single-vendor/single-vendor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendorsPageRoutingModule,
    SingleVendorComponent
  ],
  declarations: [VendorsPage]
})
export class VendorsPageModule {}
