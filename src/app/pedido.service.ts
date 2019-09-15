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
  pedidoBusqueda(filtro:string):Observable<pedido[]>
  {
    
    return this.http.get<pedido[]>('http://127.0.0.1:8000/pedidosB?filtro='+filtro);
  }
  
  
  
}
