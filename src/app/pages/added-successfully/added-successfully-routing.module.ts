import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddedSuccessfullyPage } from './added-successfully.page';

const routes: Routes = [
  {
    path: '',
    component: AddedSuccessfullyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddedSuccessfullyPageRoutingModule {}
