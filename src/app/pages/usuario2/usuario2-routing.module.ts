import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Usuario2Page } from './usuario2.page';

const routes: Routes = [
  {
    path: '',
    component: Usuario2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Usuario2PageRoutingModule {}
