import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {producto} from './datos/producto.model'
import { Observable } from 'rxjs';
import { categoria } from './datos/categoria.model';
import { proveedor } from './datos/proveedor.model';
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

  productoCategoria(id:number):Observable<categoria>
  {
    
    return this.http.get<categoria>(`${'http://127.0.0.1:8000/producto/'}${id}${'/categoria'}`);
  }

  productoProveedor(id:number):Observable<proveedor>
  {
    
    return this.http.get<proveedor>(`${'http://127.0.0.1:8000/producto/'}${id}${'/proveedor'}`);
  }


  productoBusqueda(filtro:string):Observable<producto[]>
  {
    
    return this.http.get<producto[]>('http://127.0.0.1:8000/productosB?filtro='+filtro);
  }
  send(data,sucursal):Observable<producto>
  {
    return this.http.post<producto>('http://127.0.0.1:8000/productos?sucursal='+sucursal,data);
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
