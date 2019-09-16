import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { pedido } from '../datos/pedido.model';
@Component({
  selector: 'app-empleado-vista',
  templateUrl: './empleado-vista.component.html',
  styleUrls: ['./empleado-vista.component.css']
})
export class EmpleadoVistaComponent implements OnInit {


  pedidos: pedido[];
  displayedColumns: string[] = ['precio', 'estado','ver'];

  constructor(private empleado:EmpleadoService,private route:ActivatedRoute,private router:Router) { }
  public dato={
    identificador:0,
    nombre:"Juan",
    apellidos:"P",
    correo:"@gmail",
    direccion:"B/..",
    telefono:"3",
    carnet:"....",
    cargo:"......",
    sucursal:0 
  }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.empleado.empleadoOne(id).subscribe((res:any)=> this.dato=res.data);
        this.empleado.empleadoPedidos(id).subscribe((res:any)=> this.pedidos=res);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['empleado']}}], 
  );
  }

  goToView(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['pedidoVista',id]}}],);
  }

}
