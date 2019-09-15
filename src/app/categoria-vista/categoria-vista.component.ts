import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-vista',
  templateUrl: './categoria-vista.component.html',
  styleUrls: ['./categoria-vista.component.css']
})
export class CategoriaVistaComponent implements OnInit {

  constructor(private categoria:CategoriaService,private route:ActivatedRoute,private router:Router) { }
  public dato=
    
  {   
    nombre:"-",
    descripcion:".....",
    fechaCreacion:"-",
    ultimaActualizacion:"-"
          
 }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.categoria.categoriaOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['categoria']}}], 
  );
  }
}
