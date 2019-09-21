import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AutoService } from '../auto.service';
import { EmpleadoService } from '../empleado.service';
import { empleado } from '../datos/empleado.model';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.css']
})
export class AutoFormComponent implements OnInit {

   
  constructor(private auto:AutoService,private route:ActivatedRoute,private router:Router,private conductor:EmpleadoService) {  }

  conductors:empleado[];

  public dato={
    modeloAuto: "-",
    placaAuto: "-",
    conductor: 0,
    fechaCreacion:"-",
    ultimaActualizacion:"-" 
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
        this.auto.autoOne(id).subscribe((res:any)=> this.dato=res.data);
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

      this.conductor.conductorAll().subscribe((res:any)=>{this.conductors=res.data,console.log(this.dato)});
    
      
  }

 
  send()
  {
   this.auto.send(this.dato).subscribe(res=>alert('Registrado Exitosamente'),err=>alert('Registro Fallido'));
    console.log('exitoso');
   
  }

  update()
  {
    this.auto.update(this.codigo,this.dato).subscribe(res=>alert('Actualizacion Exitosa'),err=>alert('Actualizacion Fallida'));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['auto']}}], 
  );
  }

}
