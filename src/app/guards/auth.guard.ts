import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router=new Router();
  const token = sessionStorage.getItem('token')
  if(token!=null){
    return true
  }
  else{
    router.navigate(['login']);
    return false;
  }
};
