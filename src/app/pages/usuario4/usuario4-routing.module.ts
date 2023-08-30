import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Usuario4Page } from './usuario4.page';

const routes: Routes = [
  {
    path: '',
    component: Usuario4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Usuario4PageRoutingModule {}
