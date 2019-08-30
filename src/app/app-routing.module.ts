import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatBfloginComponent } from './stat-bflogin/stat-bflogin.component';
import { DashcontentComponent } from './dashcontent/dashcontent.component';
import { ProjectlandingComponent } from './projectlanding/projectlanding.component';
import { SowheaderComponent } from './sowheader/sowheader.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { SowlogComponent } from './sowlog/sowlog.component';


const appRoutes: Routes = [
          { path: '', component: StatBfloginComponent},
          { path: 'admin', component: DashcontentComponent, 
            children: [
              { path: '', component: ProjectlandingComponent },
              { path: 'sow', component: SowheaderComponent },
              { path: 'milestone', component: MilestoneComponent},
              { path: 'log', component: SowlogComponent}
            ]
          }
];   

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
   


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
