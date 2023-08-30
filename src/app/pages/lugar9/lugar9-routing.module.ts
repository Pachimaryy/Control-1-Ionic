import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lugar9Page } from './lugar9.page';

const routes: Routes = [
  {
    path: '',
    component: Lugar9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lugar9PageRoutingModule {}
