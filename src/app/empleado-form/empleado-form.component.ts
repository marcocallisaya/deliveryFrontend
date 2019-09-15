import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  constructor(private empleado:EmpleadoService,private route:ActivatedRoute,private router:Router) {  }

  

  public dato={
    identificador:0,
    nombre:"Juan",
    apellidos:"P",
    correo:"@gmail",
    direccion:"B/..",
    telefono:"3",
    carnet:"....",
    cargo:"......",
    sucursal:0 ,
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
        this.empleado.empleadoOne(id).subscribe((res:any)=> this.dato=res.data);
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
   this.empleado.send(this.dato).subscribe();
    console.log('exitoso');
   // this.router.navigate(['/menu',{outlets: {this: ['empleado']}}]);
  }

  update()
  {
    this.empleado.update(this.codigo,this.dato).subscribe(resp=>console.log(resp));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['empleado']}}], 
  );
  }
}
