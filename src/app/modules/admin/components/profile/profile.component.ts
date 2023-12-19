import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  detailed_user:any;
  updateForm!:FormGroup;
  constructor(private _userService:UserService,private _router:Router,private _fb:FormBuilder){
  }
  get name(){
    return this.updateForm.get('name')
  }
  get mobile(){
    return this.updateForm.get('mobile')
  }
  get email(){
    return this.updateForm.get('email')
  }
  get password(){
    return this.updateForm.get('password')
  }
  ngOnInit():void{
   this._userService.allowAccess();
   this.detailed_user=this._userService.detailed_user;
    this.updateForm = this._fb.group({
      name:[this.detailed_user.name,[Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
      mobile:[this.detailed_user.mobile,[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      email:[this.detailed_user.email,[Validators.required,Validators.email]],
      password:[this.detailed_user.password,[Validators.required,Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/)]],
    })
  }
  updatedForm(){
    this._userService.update(this.updateForm.value,this.detailed_user.id).subscribe(res=>{
      alert('updated')
      this._userService.updateUser(this.updateForm.value)
      this._router.navigate(['user-admin']);
    })
  }

}
