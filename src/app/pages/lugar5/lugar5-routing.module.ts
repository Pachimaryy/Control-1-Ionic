import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lugar5Page } from './lugar5.page';

const routes: Routes = [
  {
    path: '',
    component: Lugar5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lugar5PageRoutingModule {}
