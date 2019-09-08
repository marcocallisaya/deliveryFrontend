import { Component, OnInit, Output, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SucursalServiceService } from '../sucursal-service.service';
import { sucursal } from '../datos/sucursal.model';
import { Subscription } from 'rxjs';
import { pagina } from '../datos/pagina.model';
import { EventEmitter } from 'events';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
//aqui


animal: string;
  name: string;
  sucursals: sucursal[] ;
  pagination: pagina;
  
subscription:Subscription;


//
  constructor(private sucursal:SucursalServiceService, private router:Router,public dialog: MatDialog) { }

  

  @Output() tipoForm = new EventEmitter();

  ngOnInit() {
    this.subscription =
   this.sucursal.sucursalAll().subscribe((data:any)=>this.sucursals=data.data);
   this.sucursal.sucursalAll().subscribe((data:any)=>this.pagination=data.meta.pagination);



  }

  tipos: any[] = [
    {value: 'id', viewValue: 'id'},
    {value: 'nombre', viewValue: 'nombre'}
  ];

  myForm = new FormGroup({
    email: new FormControl()
 });
 
 displayedColumns: string[] = ['identificador','nombre', 'ciudad', 'direccion','ver','editar','eliminar'];
 
 dato:sucursal;
ver(codigo:number)
{
 
  this.sucursal.sucursalOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
  
}

goToPage(id) {
  this.router.navigate(['/menu',{outlets: {this: ['sucursalForm',id]}}], 
  );
}

goToView(id)
{
  this.router.navigate(['/menu',{outlets: {this: ['sucursalVista',id]}}], 
  );
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

me:string='Marco';
mi:string;
keyup(event) {
  console.log(event);
  this.sucursal.busqueda(event).subscribe((res:any)=>{console.log(res),this.sucursals = res.data});
}

}
