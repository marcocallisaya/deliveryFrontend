import { Component, OnInit } from '@angular/core';
import { pedido } from '../datos/pedido.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PedidoService } from '../pedido.service';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  pedidos: pedido[] ;

subscription:Subscription;
dato:pedido;

//
  constructor(private pedido:PedidoService, private router:Router,public dialog: MatDialog) { }




  ngOnInit() {
    this.subscription =
   this.pedido.pedidoAll().subscribe((data:any)=>this.pedidos=data.data);
  }

 
 displayedColumns: string[] = ['identificador','precio', 'estado','ver'];
 
 
ver(codigo:number)
{
  this.pedido.pedidoOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
  
}


goToView(id)
{
  this.router.navigate(['/menu',{outlets: {this: ['pedidoForm',id]}}],);
}





keyup(event) {
  if (event!='')
  {
    console.log(event);
    this.pedido.pedidoBusqueda(event).subscribe((res:any)=>{console.log(res),this.pedidos = res.data});
  }

 
}

ngOnDestroy()
{
  this.subscription.unsubscribe();
}

}
