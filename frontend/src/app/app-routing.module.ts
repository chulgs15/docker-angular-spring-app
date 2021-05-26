import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OracleDeployComponent } from './home/oracle-deploy/oracle-deploy.component';
import { OracleDevComponent } from './home/oracle-dev/oracle-dev.component';
import { FirstComponent } from './login/first/first.component';
import { LoginComponent } from './login/login.component';

// Login Component
const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'oracle-dev', component: OracleDevComponent },
      { path: 'oracle-deploy', component: OracleDeployComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
