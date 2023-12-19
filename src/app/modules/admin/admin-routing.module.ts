import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from 'src/app/user/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'',redirectTo:'/user-admin/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'edit-user',component:ProfileComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
