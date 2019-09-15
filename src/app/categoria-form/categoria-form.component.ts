import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

   
  constructor(private categoria:CategoriaService,private route:ActivatedRoute,private router:Router) {  }

  

  public dato={
    nombre:"-",
    descripcion:".....",
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
        this.categoria.categoriaOne(id).subscribe((res:any)=> this.dato=res.data);
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
   this.categoria.send(this.dato).subscribe();
    console.log('exitoso');
   
  }

  update()
  {
    this.categoria.update(this.codigo,this.dato).subscribe(resp=>console.log(resp));
    
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['categoria']}}], 
  );
  }

}
