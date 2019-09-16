import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {cliente} from './datos/cliente.model'
import { Observable } from 'rxjs';
import { pedido } from './datos/pedido.model';
import { reserva } from './datos/reserva.model';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  clienteAll():Observable<cliente[]>
    {
      return this.http.get<cliente[]>('http://127.0.0.1:8000/clientes');
    }

  clienteOne(id:number):Observable<cliente>
  {
    
    return this.http.get<cliente>(`${'http://127.0.0.1:8000/clientes/'}${id}`);
  }

  clientePedidos(id:number):Observable<pedido[]>
  {
    
    return this.http.get<pedido[]>(`${'http://127.0.0.1:8000/cliente/'}${id}${'/pedidos'}`);
  }

  clienteReservas(id:number):Observable<reserva[]>
  {
    
    return this.http.get<reserva[]>(`${'http://127.0.0.1:8000/cliente/'}${id}${'/reservas'}`);
  }

  clienteBusqueda(filtro:string):Observable<cliente[]>
  {
    
    return this.http.get<cliente[]>('http://127.0.0.1:8000/clientesB?filtro='+filtro);
  }
  send(data):Observable<cliente>
  {
    return this.http.post<cliente>('http://127.0.0.1:8000/clientes',data);
  }
  update(codigo:number, data)
  {
    return this.http.put<cliente>(`${'http://127.0.0.1:8000/clientes/'}${codigo}`,data);
  }

  delete(id:number)
  {
    return this.http.delete<cliente>(`${'http://127.0.0.1:8000/clientes/'}${id}`);
  }

}
