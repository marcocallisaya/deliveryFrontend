import { Component, OnInit } from '@angular/core';
import { producto } from '../datos/producto.model';
import { Subscription } from 'rxjs';
import { EventEmitter } from 'events';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: producto[] ;

  subscription:Subscription;
  dato:producto;
  
  //
    constructor(private producto:ProductoService, private router:Router,public dialog: MatDialog) { }
  
  
   
    ngOnInit() {
      this.subscription =
     this.producto.productoAll().subscribe((data:any)=>this.productos=data.data);
    }
  
   
   displayedColumns: string[] = ['identificador','nombre', 'precio', 'estado','ver','editar','eliminar'];
   
   
  ver(codigo:number)
  {
    this.producto.productoOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
    
  }
  
  goToPage(id) {
    this.router.navigate(['/menu',{outlets: {this: ['productoForm',id]}}],);
  }
  
  goToView(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['productoVista',id]}}],);
  }
  
  
  delete(id)
  {
   this.producto.delete(id).subscribe(res=>console.log(res));
  }
  
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      width: '350px',
      data: "Estas seguro de Eliminarlo"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.delete(id);
      }
    });
  }
  
  keyup(event) {
    if (event!='')
    {
      console.log(event);
      this.producto.productoBusqueda(event).subscribe((res:any)=>{console.log(res),this.productos = res.data});
    }
  
   
  }
  
 

}
