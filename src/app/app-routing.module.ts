import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './authentication.guard';



const routes: Routes = [
  { path:'' , redirectTo:"/login" , pathMatch:'full'},
  { path:'login' ,component:LoginComponent},
  { path:'home' ,component:HomeComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard]}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
