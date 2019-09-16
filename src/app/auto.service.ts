import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {auto} from './datos/auto.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http:HttpClient) { }

  autoAll():Observable<auto[]>
    {
      return this.http.get<auto[]>('http://127.0.0.1:8000/autos');
    }

  autoOne(id:number):Observable<auto>
  {
    
    return this.http.get<auto>(`${'http://127.0.0.1:8000/autos/'}${id}`);
  }


  autoBusqueda(filtro:string):Observable<auto[]>
  {
    
    return this.http.get<auto[]>('http://127.0.0.1:8000/autosB?filtro='+filtro);
  }
  send(data):Observable<auto>
  {
    return this.http.post<auto>('http://127.0.0.1:8000/autos',data);
  }

  update(codigo:number, data)
  {
    return this.http.put<auto>(`${'http://127.0.0.1:8000/autos/'}${codigo}`,data);
  }


}
