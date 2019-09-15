import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-vista',
  templateUrl: './producto-vista.component.html',
  styleUrls: ['./producto-vista.component.css']
})
export class ProductoVistaComponent implements OnInit {

  constructor(private producto:ProductoService,private route:ActivatedRoute,private router:Router) { }
  public dato=
    
  {
       
    nombre:"J",
    precio:0.0,
    imagen:"-",
    stock:0,
    reserva:0,
    estado:"-",
    proveedor:0, 
    categoria:0,
          
 }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.producto.productoOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['producto']}}], 
  );
  }
}
