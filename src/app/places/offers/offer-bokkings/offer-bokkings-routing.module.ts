import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferBokkingsPage } from './offer-bokkings.page';

const routes: Routes = [
  {
    path: '',
    component: OfferBokkingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferBokkingsPageRoutingModule {}
