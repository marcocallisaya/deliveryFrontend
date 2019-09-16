import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../proveedor.service';
import { producto } from '../datos/producto.model';

@Component({
  selector: 'app-proveedor-vista',
  templateUrl: './proveedor-vista.component.html',
  styleUrls: ['./proveedor-vista.component.css']
})
export class ProveedorVistaComponent implements OnInit {


   productos: producto[];
  displayedColumns: string[] = ['nombre', 'precio', 'estado','ver'];
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
        this.proveedor.proveedorProducts(id).subscribe((res:any)=> this.productos=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['proveedor']}}], 
  );
  }

  goToView(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['productoVista',id]}}],);
  }
}
