import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {empleado} from './datos/empleado.model'
import { Observable } from 'rxjs';
import { pedido } from './datos/pedido.model';
import { auto } from './datos/auto.model';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http:HttpClient) { }

  empleadoAll():Observable<empleado[]>
    {
      return this.http.get<empleado[]>('http://127.0.0.1:8000/empleados');
    }
  
    admnistrativoAll():Observable<empleado[]>
    {
      return this.http.get<empleado[]>('http://127.0.0.1:8000/administradores');
    }

    conductorAll():Observable<empleado[]>
    {
      return this.http.get<empleado[]>('http://127.0.0.1:8000/conductores');
    }

    empleadoAuto(id:number):Observable<auto>
    {
      
      return this.http.get<auto>(`${'http://127.0.0.1:8000/conductor/'}${id}${'/auto'}`);
    }


  empleadoOne(id:number):Observable<empleado>
  {
    
    return this.http.get<empleado>(`${'http://127.0.0.1:8000/empleados/'}${id}`);
  }

  empleadoPedidos(id:number):Observable<pedido[]>
  {
    
    return this.http.get<pedido[]>(`${'http://127.0.0.1:8000/empleado/'}${id}${'/pedidos'}`);
  }

  empleadoBusqueda(filtro:string):Observable<empleado[]>
  {
    
    return this.http.get<empleado[]>('http://127.0.0.1:8000/empleadosB?filtro='+filtro);
  }
  send(data):Observable<empleado>
  {
    return this.http.post<empleado>('http://127.0.0.1:8000/empleados',data);
  }
  update(codigo:number, data)
  {
    return this.http.put<empleado>(`${'http://127.0.0.1:8000/empleados/'}${codigo}`,data);
  }

  delete(id:number)
  {
    return this.http.delete<empleado>(`${'http://127.0.0.1:8000/empleados/'}${id}`);
  }
}
