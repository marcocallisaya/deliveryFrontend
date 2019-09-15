import { Component, OnInit, OnDestroy } from '@angular/core';
import { cliente } from '../datos/cliente.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

 //aqui
 clientes: cliente[] ;

 subscription:Subscription;
 dato:cliente;
 
 
   constructor(private cliente:ClienteService, private router:Router,public dialog: MatDialog) 
   { }
 

 
   ngOnInit() {
    //this.subscription =
    this.cliente.clienteAll().subscribe((data:any)=>this.clientes=data.data);
  
   }
 
 
  
  displayedColumns: string[] = ['identificador','nombre', 'carnet','ver','editar','eliminar'];
  
  
 ver(codigo:number)
 {
   this.cliente.clienteOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
   
 }
 
 goToPage(id) {
   this.router.navigate(['/menu',{outlets: {this: ['clienteForm',id]}}],);
 }
 
 goToView(id)
 {
   this.router.navigate(['/menu',{outlets: {this: ['clienteVista',id]}}],);
 }
 
 
 delete(id)
 {
  this.cliente.delete(id).subscribe(res=>console.log(res));
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
     this.cliente.clienteBusqueda(event).subscribe((res:any)=>{console.log(res),this.clientes = res.data});
   }
 
  
 }
 
 


}
