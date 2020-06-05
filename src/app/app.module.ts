import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { SearchUserComponent } from './users/search-user/search-user.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { UserService } from './users/user.service';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { StaticDataService } from './static-data.service';

const routes : Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent, children: [
    {path: 'list', component: UserListComponent},
    {path: 'create', component: AddUserComponent},
    {path: 'search', component: SearchUserComponent},
    {path: '', component: DashboardComponent}
  ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserListComponent,
    AddUserComponent,
    SearchUserComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [UserService, StaticDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
