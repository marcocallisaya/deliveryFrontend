import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required],
    });
  }

}