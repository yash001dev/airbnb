import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferBokkingsPageRoutingModule } from './offer-bokkings-routing.module';

import { OfferBokkingsPage } from './offer-bokkings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferBokkingsPageRoutingModule
  ],
  declarations: [OfferBokkingsPage]
})
export class OfferBokkingsPageModule {}
