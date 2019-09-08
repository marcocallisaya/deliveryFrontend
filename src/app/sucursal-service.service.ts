import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {sucursal} from './datos/sucursal.model'
import { pagina } from './datos/pagina.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SucursalServiceService {

  constructor(private http:HttpClient) { }

  sucursalAll():Observable<sucursal[]>
    {
      return this.http.get<sucursal[]>('http://127.0.0.1:8000/sucursals');
    }

  sucursalOne(id:number):Observable<sucursal>
  {
    
    return this.http.get<sucursal>(`${'http://127.0.0.1:8000/sucursals/'}${id}`);
  }
  sendAll(data):Observable<sucursal>
  {
    return this.http.post<sucursal>('http://127.0.0.1:8000/sucursals',data);
  }
  update(codigo:number, data)
  {
    return this.http.put<sucursal>(`${'http://127.0.0.1:8000/sucursals/'}${codigo}`,data);
  }

  delete(id:number)
  {
    return this.http.delete<sucursal>(`${'http://127.0.0.1:8000/sucursals/'}${id}`);
  }

  
  busqueda(valor:string)
  {
    
      return this.http.get<sucursal[]>('http://127.0.0.1:8000/sucursals?nombre='+valor);
    
    
  }
  
}
