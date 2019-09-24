import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-vista',
  templateUrl: './reserva-vista.component.html',
  styleUrls: ['./reserva-vista.component.css']
})
export class ReservaVistaComponent implements OnInit {

  

  displayedColumns: string[] = ['nombre', 'precio', 'estado','ver'];

  constructor(private reserva:ReservaService,private route:ActivatedRoute,private router:Router) { }
  public dato=
    
  {
       
    identificador: 0,
    montoPendiente:0,
    montoAdelantado:0,
    fechaEntrega:"-",
    reserva:0,
          
 }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.reserva.reservaOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['reserva']}}], 
  );
  }
}
