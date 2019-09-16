import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {proveedor} from './datos/proveedor.model'
import { Observable } from 'rxjs';
import { producto } from './datos/producto.model';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

  proveedorAll():Observable<proveedor[]>
    {
      return this.http.get<proveedor[]>('http://127.0.0.1:8000/proveedores');
    }

  proveedorOne(id:number):Observable<proveedor>
  {
    
    return this.http.get<proveedor>(`${'http://127.0.0.1:8000/proveedores/'}${id}`);
  }

  proveedorProducts(id:number):Observable<producto[]>
  {
    
    return this.http.get<producto[]>(`${'http://127.0.0.1:8000/proveedor/'}${id}${'/productos'}`);
  }

  proveedorBusqueda(filtro:string):Observable<proveedor[]>
  {
    
    return this.http.get<proveedor[]>('http://127.0.0.1:8000/proveedoresB?filtro='+filtro);
  }
  send(data):Observable<proveedor>
  {
    return this.http.post<proveedor>('http://127.0.0.1:8000/proveedores',data);
  }
  update(codigo:number, data)
  {
    return this.http.put<proveedor>(`${'http://127.0.0.1:8000/proveedores/'}${codigo}`,data);
  }

  delete(id:number)
  {
    return this.http.delete<proveedor>(`${'http://127.0.0.1:8000/proveedores/'}${id}`);
  }
}
