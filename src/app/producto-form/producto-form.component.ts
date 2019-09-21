import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { SucursalServiceService } from '../sucursal-service.service';
import { sucursal } from '../datos/sucursal.model';
import { CategoriaService } from '../categoria.service';
import { categoria } from '../datos/categoria.model';
import { ProveedorService } from '../proveedor.service';
import { proveedor } from '../datos/proveedor.model';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface estado {
  estado:string
}

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  estados:estado[] = [
    {estado:'Activo'},
    {estado:'Inactivo'}
  ]

  myForm:FormGroup;

  public dato = {
    nombre:'J',
    precio:0.0,
  img:'url',
  stock:0,
  reserva:0,
  estado:'-',
  proveedor:0, 
  categoria:0,
  sucursal:0
  };


  constructor(private producto:ProductoService,private route:ActivatedRoute,private router:Router,private Sucursal:SucursalServiceService,private categoria:CategoriaService,private proveedor:ProveedorService,private fb:FormBuilder) {
    

    }


  

  sucursals:sucursal[];
  categorias:categoria[];
  proveedors:proveedor[];

  


  formNew:boolean;
  formUpdate:boolean;
  codigo:number = 0;
  
   
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

      this.Sucursal.sucursalAll().subscribe((res:any)=>this.sucursals=res.data);
      this.categoria.categoriaAll().subscribe((res:any)=>{this.categorias=res.data,console.log(res)});
      this.proveedor.proveedorAll().subscribe((res:any)=>this.proveedors=res.data);
    console.log(this.dato);


    //wñfdmnspfnspfpsf

    this.myForm = this.fb.group({
      nombre:this.dato.nombre,
      precio:this.dato.precio,
      img:this.dato.img,
      stock:this.dato.stock,
      reserva:this.dato.reserva,
      estado:this.dato.estado,
      proveedor:this.dato.proveedor, 
      categoria:this.dato.categoria,
      sucursal:this.dato.sucursal
    });
      
  }

  
  send(sucursal)
  {
   this.producto.send(this.dato,sucursal).subscribe(res=>alert('Registrado Exitosamente'),err=>alert('Registro Fallido'));
   console.log(this.dato);
  
   
   
   
  }

  update()
  {
    this.producto.update(this.codigo,this.dato).subscribe(res=>alert('Actualizacion Exitosa'),err=>alert('Actualizacion Fallida'));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['producto']}}], 
  );
  }
  enviar(myForm)
  {
   this.producto.send(myForm.value,myForm.value.sucursal).subscribe(res=>console.log(res),err=>console.log(err));
   //console.log(myForm.value);



  }
  
}
