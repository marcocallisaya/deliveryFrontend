import { Component, OnInit } from '@angular/core';
import { auto } from '../datos/auto.model';
import { Subscription } from 'rxjs';
import { EventEmitter } from 'events';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  autos: auto[] ;

  subscription:Subscription;
  dato:auto;
  
  //
    constructor(private auto:AutoService, private router:Router,public dialog: MatDialog) { }
  
  
   
    ngOnInit() {
      this.subscription =
     this.auto.autoAll().subscribe((data:any)=>this.autos=data.data);
    }
  
   
   displayedColumns: string[] = ['identificador','modeloAuto', 'placaAuto','ver','editar','conductor'];
   
   
  ver(codigo:number)
  {
    this.auto.autoOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
    
  }
  
  goToPage(id) {
    this.router.navigate(['/menu',{outlets: {this: ['autoForm',id]}}],);
  }
  
  goToView(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['autoVista',id]}}],);
  }

  goToConductor(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['empleadoVista',id]}}],);
  }
  
  

  
  keyup(event) {
    if (event!='')
    {
      console.log(event);
      this.auto.autoBusqueda(event).subscribe((res:any)=>{console.log(res),this.autos = res.data});
    }
  
   
  }
}
