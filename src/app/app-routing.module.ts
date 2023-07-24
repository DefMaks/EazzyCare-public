import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    // canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
  },
  {
    path: 'vendors',
    loadChildren: () => import('./pages/vendors/vendors.module').then( m => m.VendorsPageModule)
  },
  {
    path: 'vendor/:part',
    loadChildren: () => import('./pages/vendors/vendors.module').then( m => m.VendorsPageModule),
    data: {
      pagetype: 'search',
      layoutType: 'listOnly'
    }
  },
  {
    path: 'search-vendor',
    loadChildren: () => import('./pages/vendors/vendors.module').then( m => m.VendorsPageModule),
    data: {
      pagetype: 'search',
      layoutType: 'searchForm'
    }
  },

  {
    path: 'single-vendor/:id',
    loadChildren: () => import('./pages/vendors/vendors.module').then( m => m.VendorsPageModule),
    data: {
      isSingle: 'single',
    }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
