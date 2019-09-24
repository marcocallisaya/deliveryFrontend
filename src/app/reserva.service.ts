import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {reserva} from './datos/reserva.model'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ReservaService {


  constructor(private http:HttpClient) { }

  reservaAll():Observable<reserva[]>
    {
      return this.http.get<reserva[]>('http://127.0.0.1:8000/reservas');
    }

  reservaOne(id:number):Observable<reserva>
  {
    
    return this.http.get<reserva>(`${'http://127.0.0.1:8000/reservas/'}${id}`);
  }
  reservaBusqueda(filtro:string):Observable<reserva[]>
  {
    
    return this.http.get<reserva[]>('http://127.0.0.1:8000/reservasB?filtro='+filtro);
  }
  
  delete(id:number)
  {
    return this.http.delete<reserva>(`${'http://127.0.0.1:8000/reservas/'}${id}`);
  }
}
