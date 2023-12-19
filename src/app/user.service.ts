import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData = new BehaviorSubject<any>({});
  // details = this.userData.asObservable();

  public detailed_user:any;
  dbUrl:any = "http://localhost:3000/users";
  list:any=[];
  constructor(private _http:HttpClient,private _router:Router) { }

  isAuthenticatedUser():boolean{
    if(sessionStorage.getItem('token')!=null){
      return true;
    }
    return false;
  }
  allowAccess=()=>{
    if(!this.isAuthenticatedUser()){
      this._router.navigate(['login']);
    }
  }
  authenticatedUser=()=>{
    if(this.isAuthenticatedUser()){
      this._router.navigate(['user-admin'])
    }
    else{
      this._router.navigate(['login']);
    }
    
  }
  setToken=(token:any)=>{
    sessionStorage.setItem('token',token);
  }

  removeToken=()=>{
    sessionStorage.removeItem('token')
  }

  signUp=(user:any)=>{
    return this._http.post<any>(this.dbUrl,user);
  }
  signIn=()=>{
    return this._http.get<any>(this.dbUrl);
  }
  update=(user:any,id:number)=>{
    return this._http.put<any>(this.dbUrl+'/'+id,user);
  }
  updateUser=(user:any)=>{
    this.detailed_user=user;
      this.userData.next(user)
  }
  getUser(){
    return this.userData.asObservable();
  }
}
