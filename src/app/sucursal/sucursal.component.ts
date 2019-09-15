import { Component, OnInit, Output, Inject, OnDestroy } from '@angular/core';
import { SucursalServiceService } from '../sucursal-service.service';
import { sucursal } from '../datos/sucursal.model';
import { Subscription } from 'rxjs';
import { EventEmitter } from 'events';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';



@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit,OnDestroy {
//aqui
  sucursals: sucursal[] ;

subscription:Subscription;
dato:sucursal;

//
  constructor(private sucursal:SucursalServiceService, private router:Router,public dialog: MatDialog) { }


  @Output() tipoForm = new EventEmitter();

  ngOnInit() {
    this.subscription =
   this.sucursal.sucursalAll().subscribe((data:any)=>this.sucursals=data.data);
  }

 
 displayedColumns: string[] = ['identificador','nombre', 'ciudad', 'direccion','ver','editar','eliminar'];
 
 
ver(codigo:number)
{
  this.sucursal.sucursalOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
  
}

goToPage(id) {
  this.router.navigate(['/menu',{outlets: {this: ['sucursalForm',id]}}],);
}

goToView(id)
{
  this.router.navigate(['/menu',{outlets: {this: ['sucursalVista',id]}}],);
}


delete(id)
{
 this.sucursal.delete(id).subscribe(res=>console.log(res));
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
    this.sucursal.sucursalBusqueda(event).subscribe((res:any)=>{console.log(res),this.sucursals = res.data});
  }

 
}

ngOnDestroy()
{
  this.subscription.unsubscribe();
}

}
