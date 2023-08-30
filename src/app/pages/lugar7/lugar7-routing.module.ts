import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lugar7Page } from './lugar7.page';

const routes: Routes = [
  {
    path: '',
    component: Lugar7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lugar7PageRoutingModule {}
