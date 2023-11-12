import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutowppLoginComponent } from './pages/autowpp-login/autowpp-login.component';
import { AutowppDashboardComponent } from './pages/autowpp-dashboard/autowpp-dashboard.component';

const routes: Routes = [
  { path: 'home', component: AutowppDashboardComponent },
  { path: 'login', component: AutowppLoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
