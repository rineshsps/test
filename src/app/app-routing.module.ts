import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from './component/list-page/list-page.component';
import { UserListPageComponent } from './component/user-list-page/user-list-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { AuthGuard } from './guard/auth.guard';
import { JobSchedulerComponent } from './component/job-scheduler/job-scheduler.component';

const routes: Routes = [
  { path: 'joblist', component: ListPageComponent, canActivate: [AuthGuard]},
  { path: 'createjob', component: JobSchedulerComponent, canActivate: [AuthGuard]},
  // { path: 'userlist', component: UserListPageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginPageComponent},
  { path: '', redirectTo: '/joblist', pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
