import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {categoria} from './datos/categoria.model'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  categoriaAll():Observable<categoria[]>
    {
      return this.http.get<categoria[]>('http://127.0.0.1:8000/categorias');
    }

  categoriaOne(id:number):Observable<categoria>
  {
    
    return this.http.get<categoria>(`${'http://127.0.0.1:8000/categorias/'}${id}`);
  }
  categoriaBusqueda(filtro:string):Observable<categoria[]>
  {
    
    return this.http.get<categoria[]>('http://127.0.0.1:8000/categoriasB?filtro='+filtro);
  }
  send(data):Observable<categoria>
  {
    return this.http.post<categoria>('http://127.0.0.1:8000/categorias',data);
  }
  update(codigo:number, data)
  {
    return this.http.put<categoria>(`${'http://127.0.0.1:8000/categorias/'}${codigo}`,data);
  }

  delete(id:number)
  {
    return this.http.delete<categoria>(`${'http://127.0.0.1:8000/categorias/'}${id}`);
  }
}
