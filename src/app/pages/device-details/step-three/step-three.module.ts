import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepThreePageRoutingModule } from './step-three-routing.module';

import { StepThreePage } from './step-three.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    StepThreePageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [StepThreePage]
})
export class StepThreePageModule { }
