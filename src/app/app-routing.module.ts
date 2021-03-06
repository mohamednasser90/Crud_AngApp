import { UserListComponent } from './user-list/user-list.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component:AppComponent
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'people-list',
    component:PeopleListComponent
  },
  {
    path:'user-list',
    component:UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
