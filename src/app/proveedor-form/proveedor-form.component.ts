import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';
@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent implements OnInit {

  constructor(private proveedor:ProveedorService,private route:ActivatedRoute,private router:Router) {  }

  

  public dato={
            identificador:0,
            nombre:"J",
    direccion:"-",
    ciudad:"-",
    telefono:".....",
    descripcion:".....",
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
        this.proveedor.proveedorOne(id).subscribe((res:any)=> this.dato=res.data);
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
   this.proveedor.send(this.dato).subscribe();
    console.log('exitoso');
    
  }

  update()
  {
    this.proveedor.update(this.codigo,this.dato).subscribe(resp=>console.log(resp));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['proveedor']}}], 
  );
  }
}
