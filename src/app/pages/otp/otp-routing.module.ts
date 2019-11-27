import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpPage } from './otp.page';

const routes: Routes = [
  {
    path: '',
    component: OtpPage
  },
  {
    path: 'otp-verification',
    loadChildren: () => import('./otp-verification/otp-verification.module').then( m => m.OtpVerificationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpPageRoutingModule {}
