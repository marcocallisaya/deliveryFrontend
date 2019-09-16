import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';
import { JarvisService } from '../jarvis.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public loggedIn:boolean;
  constructor(private auth:AuthService,private router:Router,private token:TokenService, private jarvis:JarvisService) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value=>this.loggedIn = value);
  }


    logout(event:MouseEvent){
      event.preventDefault();
      this.token.remove();
      this.auth.changeAuthStatus(false);
      this.router.navigateByUrl('login');
    }
    public tokenn:string = this.token.get();
    getjwt(event:MouseEvent){
      event.preventDefault();
      this.jarvis.get(this.tokenn);
    }

}
