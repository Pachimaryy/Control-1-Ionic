import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Usuario3Page } from './usuario3.page';

const routes: Routes = [
  {
    path: '',
    component: Usuario3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Usuario3PageRoutingModule {}
