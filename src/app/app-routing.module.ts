import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'appoinment-details/:id',
    loadChildren: () => import('./Pages/appoinment-details/appoinment-details.module').then( m => m.AppoinmentDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./Pages/otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./Pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'request-services/:id',
    loadChildren: () => import('./Pages/request-services/request-services.module').then( m => m.RequestServicesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
