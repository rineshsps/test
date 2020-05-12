import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ListPageComponent } from './component/list-page/list-page.component';
import { UserListPageComponent } from './component/user-list-page/user-list-page.component';
import { MaterialModule } from './material.module';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JobSchedulerComponent } from './component/job-scheduler/job-scheduler.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListPageComponent,
    UserListPageComponent,
    LoginPageComponent,
    JobSchedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
