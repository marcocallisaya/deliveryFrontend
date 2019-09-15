import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {producto} from './datos/producto.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http:HttpClient) { }

  productoAll():Observable<producto[]>
    {
      return this.http.get<producto[]>('http://127.0.0.1:8000/productos');
    }

  productoOne(id:number):Observable<producto>
  {
    
    return this.http.get<producto>(`${'http://127.0.0.1:8000/productos/'}${id}`);
  }
  productoBusqueda(filtro:string):Observable<producto[]>
  {
    
    return this.http.get<producto[]>('http://127.0.0.1:8000/productosB?filtro='+filtro);
  }
  send(data):Observable<producto>
  {
    return this.http.post<producto>('http://127.0.0.1:8000/productos',data);
  }
  update(codigo:number, data)
  {
    return this.http.put<producto>(`${'http://127.0.0.1:8000/productos/'}${codigo}`,data);
  }

  delete(id:number)
  {
    return this.http.delete<producto>(`${'http://127.0.0.1:8000/productos/'}${id}`);
  }
}
