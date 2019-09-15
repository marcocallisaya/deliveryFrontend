import { Component, OnInit } from '@angular/core';
import { proveedor } from '../datos/proveedor.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { ProveedorService } from '../proveedor.service';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedors: proveedor[] ;

  subscription:Subscription;
  dato:proveedor;
  
  //
    constructor(private proveedor:ProveedorService, private router:Router,public dialog: MatDialog) { }
  
  
  
    ngOnInit() {
      this.subscription =
     this.proveedor.proveedorAll().subscribe((data:any)=>this.proveedors=data.data);
    }
  
   
   displayedColumns: string[] = ['identificador','nombre', 'direccion', 'telefono','ver','editar','eliminar'];
   
   
  ver(codigo:number)
  {
    this.proveedor.proveedorOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
    
  }
  
  goToPage(id) {
    this.router.navigate(['/menu',{outlets: {this: ['proveedorForm',id]}}],);
  }
  
  goToView(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['proveedorVista',id]}}],);
  }
  
  
  delete(id)
  {
   this.proveedor.delete(id).subscribe(res=>console.log(res));
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
      this.proveedor.proveedorBusqueda(event).subscribe((res:any)=>{console.log(res),this.proveedors = res.data});
    }
  
   
  }
  
 
  
}
