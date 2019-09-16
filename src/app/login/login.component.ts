import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TokenService } from './../token.service';
import { JarvisService } from './../jarvis.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null
  }
    
  public error = null;

  constructor(private jarvis:JarvisService,
    private token:TokenService, private router:Router
    ,private Auth:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
  this.jarvis.login(this.form)
   .subscribe(
     data => this.handleResponse(data),
     error =>this.handleError(error)
   );
  }

 handleError(error){
  this.error = error.error.error;
 }
 handleResponse(data){
   console.log(data);
  this.token.handle(data.access_token);
  this.Auth.changeAuthStatus(true);
  this.router.navigateByUrl('/menu');
 }

}