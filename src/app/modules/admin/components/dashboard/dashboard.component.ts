import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // constructor(private _userService:UserService,private _router:Router){}
  // loggeduser:any;
  // ngOnInit():void{
  //   this._userService.allowAccess();
  //   if(this._userService.isAuthenticatedUser()){
  //     this._userService.signIn().subscribe(res=>{
  //       if(res.email===sessionStorage.getItem('token')){
  //         this.loggeduser=res;
  //       }
  //     })
  //   }
    
  // }

}
