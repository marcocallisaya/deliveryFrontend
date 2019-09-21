import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {  ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(private cliente:ClienteService,private route:ActivatedRoute,private router:Router) {  }

  

  public dato={
    identificador:0,
    nombre:"Juan",
    apellidos:"P",
    correo:"@gmail",
    direccion:"B/..",
    telefono:"3",
    carnet:"....",
    contrasena:"",
  }; 
  formNew:boolean;
  formUpdate:boolean;
  codigo:number = 0;


  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.cliente.clienteOne(id).subscribe((res:any)=> this.dato=res.data);
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

 
  send()
  {
   this.cliente.send(this.dato).subscribe(res=>alert('Registro Exitoso'),err=>alert('Registro Fallido'));
    console.log('exitoso');
 
  }

  update()
  {
    this.cliente.update(this.codigo,this.dato).subscribe(resp=>alert('Actualizacion Exitosa'),err=>alert('Actualizacion Fallida'));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['cliente']}}], 
  );
  }
}
