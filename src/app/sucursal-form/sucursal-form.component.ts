import { Component, OnInit, Input, AfterContentInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SucursalServiceService } from '../sucursal-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { sucursal } from '../datos/sucursal.model';

@Component({
  selector: 'app-sucursal-form',
  templateUrl: './sucursal-form.component.html',
  styleUrls: ['./sucursal-form.component.css']
})
export class SucursalFormComponent implements OnInit {

  
  constructor(private Sucursal:SucursalServiceService,private route:ActivatedRoute,private router:Router) {  }

  

  public dato={
            identificador:0,
            nombre: 'Juan',
            direccion: 'B/..',
            ciudad: 'SC',
            telefono: '3',   
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
        this.Sucursal.sucursalOne(id).subscribe((res:any)=> this.dato=res.data);
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
   this.Sucursal.send(this.dato).subscribe();
    console.log('exitoso');
    this.router.navigate(['/menu',{outlets: {this: ['sucursal']}}]);
  }

  update()
  {
    this.Sucursal.update(this.codigo,this.dato).subscribe(resp=>console.log(resp));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['sucursal']}}], 
  );
  }
}
