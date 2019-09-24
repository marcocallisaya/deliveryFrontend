import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login: 'http://localhost:8000/au/login',
    signup: 'http://localhost:8000/api/signup'
  }

  constructor() { }

  handle(token){
    this.set(token);
   
  }

  set(token){
    localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    return localStorage.removeItem('token');
  }
  isValid(){
    const token = this.get(); //obtenemos el token
    if (token){
      const payload = this.payload(token);

      if (payload){
        //Obtenemos los valores del objeto iss y buscamos en sus indices los origenes
        // solo pueden ser dos, login y sighup ; si no lo encuentra devuelve -1 
       return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }

    }
    return false;
  }

  payload(token){
    //tomamos el segundo segmento del token separado por un punto y lo devolvemos 
   const payload= token.split('.')[1];
  return this.decode(payload);
  }

  decode(payload){
    //lo decodifica en base64 y lo devuelve con los datos 
    return JSON.parse(atob(payload));
  }


  loggedIn(){
    return this.isValid();
  }
}
