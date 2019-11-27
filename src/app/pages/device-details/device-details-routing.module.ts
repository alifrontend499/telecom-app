import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'step-one', pathMatch: 'full' },
  {
    path: 'step-one',
    loadChildren: () => import('./step-one/step-one.module').then(m => m.StepOnePageModule)
  },  {
    path: 'step-two',
    loadChildren: () => import('./step-two/step-two.module').then( m => m.StepTwoPageModule)
  },
  {
    path: 'step-three',
    loadChildren: () => import('./step-three/step-three.module').then( m => m.StepThreePageModule)
  },
  {
    path: 'step-four',
    loadChildren: () => import('./step-four/step-four.module').then( m => m.StepFourPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceDetailsPageRoutingModule { }
