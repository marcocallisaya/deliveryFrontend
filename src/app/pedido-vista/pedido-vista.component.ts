import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../pedido.service';
import { cliente } from '../datos/cliente.model';
import { empleado } from '../datos/empleado.model';
import { producto } from '../datos/producto.model';
@Component({
  selector: 'app-pedido-vista',
  templateUrl: './pedido-vista.component.html',
  styleUrls: ['./pedido-vista.component.css']
})
export class PedidoVistaComponent implements OnInit {

  constructor(private pedido:PedidoService,private route:ActivatedRoute,private router:Router) { }
  public dato=
    
  {
       
    identificador: 0,
    precio:0,
    estado:"-",
    cliente:"Juan",
    conductor:0,
    administrador:0
          
 }; 
 productos: producto[] ;
 cliente:cliente;
 empleado:empleado;

 displayedColumns: string[] = ['nombre', 'precio', 'estado','ver'];
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.pedido.pedidoOne(id).subscribe((res:any)=> this.dato=res.data);
        this.pedido.pedidoCliente(id).subscribe((res:any)=> this.cliente=res.data);
        this.pedido.pedidoEmpleado(id).subscribe((res:any)=> this.empleado=res.data);
        this.pedido.pedidoProductos(id).subscribe((res:any)=> this.productos=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['pedido']}}], 
  );
  }

  goToView()
  {
    this.router.navigate(['/menu',{outlets: {this: ['clienteVista',this.cliente.identificador]}}], 
  );
  }

  goToEmpleado()
  {
    this.router.navigate(['/menu',{outlets: {this: ['empleadoVista',this.empleado.identificador]}}], 
  );
  }
  goToProduct(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['productoVista',id]}}], 
  );
  }
}
