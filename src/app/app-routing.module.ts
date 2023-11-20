import { NgModule, inject } from '@angular/core';
import { PreloadAllModules, Route, RouterModule, Routes, UrlSegment } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'auth-screen',
    loadChildren: () => import('./pages/auth-screen/auth-screen.module').then( m => m.AuthScreenPageModule),
    canMatch: [async() => await inject(AuthService).introGuard()]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [async() => await inject(AuthService).authGuard()]
  },
  {
    path: 'health-records',
    loadChildren: () => import('./pages/health-records/health-records.module').then( m => m.HealthRecordsPageModule)
  },
  {
    path: 'new-letters',
    loadChildren: () => import('./pages/new-letters/new-letters.module').then( m => m.NewLettersPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'medicine',
    loadChildren: () => import('./pages/medicine/medicine.module').then( m => m.MedicinePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
