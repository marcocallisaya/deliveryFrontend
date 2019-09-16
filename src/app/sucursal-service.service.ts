import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {sucursal} from './datos/sucursal.model'
import { Observable } from 'rxjs';
import { empleado } from './datos/empleado.model';
@Injectable({
  providedIn: 'root'
})
export class SucursalServiceService {

  constructor(private http:HttpClient) { }

  sucursalAll():Observable<sucursal[]>
    {
      return this.http.get<sucursal[]>('http://127.0.0.1:8000/sucursals');
    }

    sucursalEmpleado(id:number):Observable<empleado[]>
    {
      
      return this.http.get<empleado[]>(`${'http://127.0.0.1:8000/sucursals/'}${id}${'/empleados'}`);
    }
    sucursalProductos(id:number):Observable<empleado[]>
    {
      
      return this.http.get<empleado[]>(`${'http://127.0.0.1:8000/sucursals/'}${id}${'/productos'}`);
    }

  sucursalOne(id:number):Observable<sucursal>
  {
    
    return this.http.get<sucursal>(`${'http://127.0.0.1:8000/sucursals/'}${id}`);
  }
  sucursalBusqueda(filtro:string):Observable<sucursal[]>
  {
    
    return this.http.get<sucursal[]>('http://127.0.0.1:8000/sucursalsB?filtro='+filtro);
  }
  send(data):Observable<sucursal>
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
  
}
