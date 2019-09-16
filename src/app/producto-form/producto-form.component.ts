import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  
  constructor(private producto:ProductoService,private route:ActivatedRoute,private router:Router) {  }

  

  public dato={
    nombre:"J",
    precio:0.0,
    imagen:"-",
    stock:0,
    reserva:0,
    estado:"-",
    proveedor:0, 
    categoria:0,
  }; 
  formNew:boolean;
  formUpdate:boolean;
  codigo:number = 0;
  sucursal:number=0;

  ngOnInit() {
   
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.producto.productoOne(id).subscribe((res:any)=> this.dato=res.data);
       console.log('es numero');
       this.formNew = false;
       this.formUpdate = true;
     
      }
      else{
        console.log('no es numero');
        this.formNew = true;
        this.formUpdate = false;
      }
      
       
       this.codigo = id;
      
      });


    console.log(this.dato);
      
  }

  
  send(sucursal)
  {
   this.producto.send(this.dato,sucursal).subscribe(res=>console.log(res));
   console.log('exitoso');
  
   
   
   
  }

  update()
  {
    this.producto.update(this.codigo,this.dato).subscribe(resp=>console.log(resp));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['producto']}}], 
  );
  }

}
