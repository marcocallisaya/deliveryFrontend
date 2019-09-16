import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeforeloginService implements CanActivate{

  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  constructor(private token:TokenService) { }
  canActivate() {
    return !this.token.loggedIn();
  }
}
