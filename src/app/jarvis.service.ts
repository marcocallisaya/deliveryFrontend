import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JarvisService {

  constructor(private http:HttpClient) { }


  signup(data){
   return this.http.post('http://localhost:8000/api/signup',data)
  }

  login(data){
  return  this.http.post('http://localhost:8000/auth/login',data)
  }
//
  get(token:string){
    return  this.http.get('http://localhost:8000/api/get')
    .subscribe
    (res=>console.log(res),
    error=>console.log(error))
  }
}
