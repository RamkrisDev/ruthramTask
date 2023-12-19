import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private _userService:UserService,private _router:Router){}
  errorMessage="";
  loginForm!:FormGroup;
  loggeduser:any;
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  ngOnInit():void{
    this._userService.authenticatedUser();
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })

  }
  login(){
    this._userService.signIn().subscribe(res=>{
      const user= res.find((a:any)=>{
        this.loggeduser=a;
        return a.email== this.loginForm.value.email && a.password== this.loginForm.value.password
      })
      if(user){
        this._userService.detailed_user=this.loggeduser;
        this._userService.setToken(this.loggeduser.email)
        this.loginForm.reset();
        this._userService.isAuthenticatedUser();
        this._router.navigate(['user-admin'])
      }
      else{
        this.errorMessage="Invalid credentials"
      }
    })
  }




}
