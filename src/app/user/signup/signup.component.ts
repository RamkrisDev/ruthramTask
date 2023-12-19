import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private _fb:FormBuilder,private _userService:UserService,private _router:Router,private toastr: ToastrService){}

  signForm!:FormGroup
  get name(){
    return this.signForm.get('name')
  }
  get mobile(){
    return this.signForm.get('mobile')
  }
  get email(){
    return this.signForm.get('email')
  }
  get password(){
    return this.signForm.get('password')
  }

  userDetail=[];

  ngOnInit():void{
    this._userService.authenticatedUser();
    this.signForm=this._fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      mobile:['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]]
    })
  }
  registerForm=()=>{
  
     this._userService.signUp(this.signForm.value).subscribe(res=>{
      this.signForm.reset();
      this._router.navigate(['login']) 
    })
  }

}
