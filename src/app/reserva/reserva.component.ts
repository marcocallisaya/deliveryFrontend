import { Component, OnInit } from '@angular/core';
import { reserva } from '../datos/reserva.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReservaService } from '../reserva.service';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  reservas: reserva[] ;

  subscription:Subscription;
  dato:reserva;
  
  //
    constructor(private reserva:ReservaService, private router:Router,public dialog: MatDialog) { }
  
  
  
  
    ngOnInit() {
      this.subscription =
     this.reserva.reservaAll().subscribe((data:any)=>this.reservas=data.data);
    }
  
   
   displayedColumns: string[] = ['identificador','Pendiente','Fecha','ver','eliminar'];
   
   
  ver(codigo:number)
  {
    this.reserva.reservaOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
    
  }
  
  
  goToView(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['reservaVista',id]}}],);
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
      this.reserva.reservaBusqueda(event).subscribe((res:any)=>{console.log(res),this.reservas = res.data});
    }
  
   
  }
  
  delete(id)
  {
    this.reserva.delete(id).subscribe(res=>console.log(res));
    this.reserva.reservaAll().subscribe((data:any)=>this.reservas=data.data);
    this.router.navigate(['/menu']);
  }

}
