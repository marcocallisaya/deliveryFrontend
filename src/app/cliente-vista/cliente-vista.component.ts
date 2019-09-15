import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-vista',
  templateUrl: './cliente-vista.component.html',
  styleUrls: ['./cliente-vista.component.css']
})
export class ClienteVistaComponent implements OnInit {

  constructor(private cliente:ClienteService,private route:ActivatedRoute,private router:Router) { }
  public dato={
    identificador:0,
    nombre:"Juan",
    apellidos:"P",
    correo:"@gmail",
    direccion:"B/..",
    telefono:"3",
    carnet:"...."
  }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.cliente.clienteOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['cliente']}}], 
  );
  }
}
