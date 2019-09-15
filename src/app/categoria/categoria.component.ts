import { Component, OnInit } from '@angular/core';
import { categoria } from '../datos/categoria.model';
import { Subscription } from 'rxjs';
import { EventEmitter } from 'events';
import { Router, ActivatedRoute } from '@angular/router';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { CategoriaService } from '../categoria.service';
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: categoria[] ;

  subscription:Subscription;
  dato:categoria;
  
  //
    constructor(private categoria:CategoriaService, private router:Router,public dialog: MatDialog) { }
  
  
   
  
    ngOnInit() {
      this.subscription =
     this.categoria.categoriaAll().subscribe((data:any)=>this.categorias=data.data);
    //this.categoria.categoriaAll().subscribe();
    }
  
   
   displayedColumns: string[] = ['identificador','nombre', 'descripcion','ver','editar','eliminar'];
   
   
  ver(codigo:number)
  {
    this.categoria.categoriaOne(codigo).subscribe((resp:any)=>{this.dato=resp.data;console.log(this.dato)});
    
  }
  
  goToPage(id) {
    this.router.navigate(['/menu',{outlets: {this: ['categoriaForm',id]}}],);
  }
  
  goToView(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['categoriaVista',id]}}],);
  }
  
  
  delete(id)
  {
   this.categoria.delete(id).subscribe(res=>console.log(res));
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
      this.categoria.categoriaBusqueda(event).subscribe((res:any)=>{console.log(res),this.categorias = res.data});
    }
  
   
  }
  
  

}
