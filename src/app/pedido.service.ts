import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {pedido} from './datos/pedido.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  pedidoAll():Observable<pedido[]>
    {
      return this.http.get<pedido[]>('http://127.0.0.1:8000/pedidos');
    }

  pedidoOne(id:number):Observable<pedido>
  {
    
    return this.http.get<pedido>(`${'http://127.0.0.1:8000/pedidos/'}${id}`);
  }

  pedidoCliente(id:number):Observable<pedido>
  {
    
    return this.http.get<pedido>(`${'http://127.0.0.1:8000/pedido/'}${id}${'/cliente'}`);
  }

  pedidoEmpleado(id:number):Observable<pedido>
  {
    
    return this.http.get<pedido>(`${'http://127.0.0.1:8000/pedido/'}${id}${'/empleado'}`);
  }

  pedidoProductos(id:number):Observable<pedido>
  {
    
    return this.http.get<pedido>(`${'http://127.0.0.1:8000/pedido/'}${id}${'/productos'}`);
  }

  pedidoBusqueda(filtro:string):Observable<pedido[]>
  {
    
    return this.http.get<pedido[]>('http://127.0.0.1:8000/pedidosB?filtro='+filtro);
  }
  
  update(codigo,data)
  {
    return this.http.put<pedido>(`${'http://127.0.0.1:8000/pedidos/'}${codigo}`,data);
  }
  
  
}
