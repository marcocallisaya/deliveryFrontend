import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AfterloginService implements CanActivate{

  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
 

  constructor(private token:TokenService,private router:Router) { }
  canActivate() {
    if (this.token.loggedIn())
    {
      return this.token.loggedIn();
    }
    else {
     this.router.navigateByUrl('/login');
     return false;
     
    }
  }
 
}
