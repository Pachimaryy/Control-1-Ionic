import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'lugares',
    loadChildren: () => import('./pages/lugares/lugares.module').then( m => m.LugaresPageModule)
  },
  {
    path: 'usuario1',
    loadChildren: () => import('./pages/usuario1/usuario1.module').then( m => m.Usuario1PageModule)
  },
  {
    path: 'usuario2',
    loadChildren: () => import('./pages/usuario2/usuario2.module').then( m => m.Usuario2PageModule)
  },
  {
    path: 'usuario3',
    loadChildren: () => import('./pages/usuario3/usuario3.module').then( m => m.Usuario3PageModule)
  },
  {
    path: 'usuario4',
    loadChildren: () => import('./pages/usuario4/usuario4.module').then( m => m.Usuario4PageModule)
  },
  {
    path: 'lugar1',
    loadChildren: () => import('./pages/lugar1/lugar1.module').then( m => m.Lugar1PageModule)
  },
  {
    path: 'lugar2',
    loadChildren: () => import('./pages/lugar2/lugar2.module').then( m => m.Lugar2PageModule)
  },
  {
    path: 'lugar3',
    loadChildren: () => import('./pages/lugar3/lugar3.module').then( m => m.Lugar3PageModule)
  },
  {
    path: 'lugar4',
    loadChildren: () => import('./pages/lugar4/lugar4.module').then( m => m.Lugar4PageModule)
  },
  {
    path: 'lugar5',
    loadChildren: () => import('./pages/lugar5/lugar5.module').then( m => m.Lugar5PageModule)
  },
  {
    path: 'lugar6',
    loadChildren: () => import('./pages/lugar6/lugar6.module').then( m => m.Lugar6PageModule)
  },
  {
    path: 'lugar7',
    loadChildren: () => import('./pages/lugar7/lugar7.module').then( m => m.Lugar7PageModule)
  },
  {
    path: 'lugar8',
    loadChildren: () => import('./pages/lugar8/lugar8.module').then( m => m.Lugar8PageModule)
  },
  {
    path: 'lugar9',
    loadChildren: () => import('./pages/lugar9/lugar9.module').then( m => m.Lugar9PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
