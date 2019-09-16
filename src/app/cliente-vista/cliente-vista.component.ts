import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { pedido } from '../datos/pedido.model';
import { PedidoService } from '../pedido.service';
import { reserva } from '../datos/reserva.model';
@Component({
  selector: 'app-cliente-vista',
  templateUrl: './cliente-vista.component.html',
  styleUrls: ['./cliente-vista.component.css']
})
export class ClienteVistaComponent implements OnInit {

  pedidos: pedido[] ;
  reservas:reserva[];
  displayedColumns: string[] = ['precio', 'estado','ver'];
   
  displayedColumns1: string[] = ['A Cuenta','Pendiente','ver'];
  constructor(private cliente:ClienteService,private route:ActivatedRoute,private router:Router,private pedido:PedidoService) { }
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
        this.cliente.clientePedidos(id).subscribe((data:any)=>this.pedidos=data.data);
        this.cliente.clienteReservas(id).subscribe((data:any)=>this.reservas=data.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['cliente']}}], 
  );
  }

  goToView(id)
{
  this.router.navigate(['/menu',{outlets: {this: ['pedidoVista',id]}}],);
}

goToReserva(id)
{
  this.router.navigate(['/menu',{outlets: {this: ['reservaVista',id]}}],);
}

}
