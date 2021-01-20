import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddedSuccessfullyPageRoutingModule } from './added-successfully-routing.module';

import { AddedSuccessfullyPage } from './added-successfully.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddedSuccessfullyPageRoutingModule
  ],
  declarations: [AddedSuccessfullyPage]
})
export class AddedSuccessfullyPageModule {}
