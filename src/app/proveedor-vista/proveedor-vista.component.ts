import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';

@Component({
  selector: 'app-proveedor-vista',
  templateUrl: './proveedor-vista.component.html',
  styleUrls: ['./proveedor-vista.component.css']
})
export class ProveedorVistaComponent implements OnInit {

  constructor(private proveedor:ProveedorService,private route:ActivatedRoute,private router:Router) { }
  public dato=
    
  {
       
    identificador:0,
    nombre:"J",
direccion:"-",
ciudad:"-",
telefono:".....",
descripcion:".....",
          
 }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.proveedor.proveedorOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['proveedor']}}], 
  );
  }
}
