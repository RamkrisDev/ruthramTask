import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _userService:UserService,private _router:Router){}
  detailed_user:any;
  ngOnInit():void{
    this._userService.allowAccess();
    if(this._userService.isAuthenticatedUser()){
      this.detailed_user=this._userService.detailed_user;
      this._userService.signIn().subscribe(res=>{
        res.find((a:any)=>{
          if(a.email==sessionStorage.getItem('token')){
            this._userService.updateUser(a);
            this.detailed_user=a;
          }
        })
      })
    }
  }
}
