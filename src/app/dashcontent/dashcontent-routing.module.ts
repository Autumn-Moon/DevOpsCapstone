import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SowheaderComponent } from '../sowheader/sowheader.component';

const secondaryroutes: Routes = [
   { path: '', component: SowheaderComponent}
//    { path: 'admin', component: DashcontentComponent}

  //  const routes: Routes = [
  //   {
  //     path: '',
  //     redirectTo: '/dashboard',
  //     pathMatch: 'full'
  //   },
  //   {
  //     path: '',
  //     component: MainLayoutComponent,
  //     children: [
  //       { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
  //       { path: 'users', loadChildren: '../users/users.module#UsersModule' },
  //       { path: 'account-settings', loadChildren: '../account-settings/account-settings.module#AccountSettingsModule' },
  //     ]
  //   },
  //   {
  //     path: '',
  //     component: FooterOnlyLayoutComponent,
  //     children: [
  //       { path: 'login', loadChildren: '../login/login.module#LoginModule' },
  //       { path: 'registration', loadChildren: '../registration/registration.module#RegistrationModule' }
  //     ]
  //   },
  //  ];
   
];

@NgModule({
  imports: [RouterModule.forChild(secondaryroutes)],
  exports: [RouterModule]
})
export class DashContentRoutingModule { }
