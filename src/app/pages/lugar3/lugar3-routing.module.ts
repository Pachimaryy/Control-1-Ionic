import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lugar3Page } from './lugar3.page';

const routes: Routes = [
  {
    path: '',
    component: Lugar3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lugar3PageRoutingModule {}
