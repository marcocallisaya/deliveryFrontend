import { Component, OnInit } from '@angular/core';
import { cliente } from '../datos/cliente.model';
import { empleado } from '../datos/empleado.model';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

 

   
  constructor(private cliente:ClienteService,private route:ActivatedRoute,private router:Router,private empleado:EmpleadoService, private pedido:PedidoService) {  }

  clientes:cliente[];
  conductors:empleado[];
  administradors:empleado[];

  public dato={
    precio: 0,
      estado: "-",
      cliente: 0,
      conductor: 0,
      administrador: 0,
    fechaCreacion:"-",
    ultimaActualizacion:"-" 
  }; 
  formNew:boolean;
  formUpdate:boolean;
  codigo:number = 0;


  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.pedido.pedidoOne(id).subscribe((res:any)=> this.dato=res.data);
      }

       this.codigo = id;
      
      });
      this.cliente.clienteAll().subscribe((res:any)=>this.clientes=res.data);
     this.empleado.admnistrativoAll().subscribe((res:any)=>this.administradors=res.data);
     this.empleado.conductorAll().subscribe((res:any)=>this.conductors=res.data);
    
      
  }



  update()
  {
    this.pedido.update(this.codigo,this.dato).subscribe(res=>alert('Actualizacion Exitosa'),err=>alert('Actualizacion Fallida'));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['pedido']}}], 
  );
  }
}
