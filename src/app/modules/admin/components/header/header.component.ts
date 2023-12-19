import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _fb:FormBuilder,private _userService:UserService,private _router:Router){}

  logout(){
    this._userService.detailed_user='';
    this._userService.removeToken();
    this._userService.allowAccess();
  }

}
