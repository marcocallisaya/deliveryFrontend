import { Component, OnInit, Input, AfterContentInit, } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SucursalServiceService } from '../sucursal-service.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { sucursal } from '../datos/sucursal.model';

@Component({
  selector: 'app-sucursal-form',
  templateUrl: './sucursal-form.component.html',
  styleUrls: ['./sucursal-form.component.css']
})
export class SucursalFormComponent implements OnInit {

  myform:FormGroup;
  constructor(private Sucursal:SucursalServiceService,private route:ActivatedRoute) {  }

  @Input() tipoForm;

  public dato=
    
   {
            identificador:0,
            nombre: 'Juan',
            direccion: 'B/..',
            ciudad: 'SC',
            telefono: '3',
           
  }; 
  formNew:boolean =true;
  formUpdate:boolean = false;
  codigo:number = 0;
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.Sucursal.sucursalOne(id).subscribe((res:any)=> this.dato=res.data);
       // this.myform.setValue(this.dato);
     
      }
     
       this.formNew = !this.formNew;
       this.formUpdate = !this.formUpdate;
       this.codigo = id;
      
      });


    console.log(this.dato);
      
  }

 
  send()
  {
   console.log(this.dato);
    //this.Sucursal.sendAll(data.value).subscribe();
    console.log('exitoso');
  }

  update()
  {

    this.Sucursal.update(this.codigo,this.dato).subscribe(resp=>console.log(resp));

  }
}
