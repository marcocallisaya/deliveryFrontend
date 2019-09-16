import { Component, OnInit, OnDestroy } from '@angular/core';
import { empleado } from '../datos/empleado.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { EmpleadoService } from '../empleado.service';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

 //aqui
 empleados: empleado[] ;

 subscription:Subscription;
 dato:empleado;
 auto:boolean=true;
 //
   constructor(private empleado:EmpleadoService, private router:Router,public dialog: MatDialog) { }
 

 
   ngOnInit() {
    //this.subscription =
    this.empleado.empleadoAll().subscribe((data:any)=>this.empleados=data.data);
  
   }
 
  
  displayedColumns: string[] = ['identificador','nombre', 'carnet', 'cargo','ver','editar','eliminar','auto'];
  
  
 ver(codigo:number)
 {
   this.empleado.empleadoOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
   
 }
 
 goToPage(id) {
   this.router.navigate(['/menu',{outlets: {this: ['empleadoForm',id]}}],);
 }
 
 goToView(id)
 {
   this.router.navigate(['/menu',{outlets: {this: ['empleadoVista',id]}}],);
 }
 
 goToAuto(id)
 {this.empleado.empleadoAuto(id).subscribe((res:any)=>
  this.router.navigate(['/menu',{outlets: {this: ['autoVista',res.data.identificador]}}],),
  err=>console.log('no tiene auto')
  );
  
 }
 
 delete(id)
 {
  this.empleado.delete(id).subscribe(res=>console.log(res));
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
     this.empleado.empleadoBusqueda(event).subscribe((res:any)=>{console.log(res),this.empleados = res.data});
   }
 
  
 }
 
 cargarAdm()
 {
   this.empleado.admnistrativoAll().subscribe((res:any)=>this.empleados=res.data);
 }

 cargarChr()
 {
   this.empleado.conductorAll().subscribe((res:any)=>this.empleados=res.data);
 
 }

}
