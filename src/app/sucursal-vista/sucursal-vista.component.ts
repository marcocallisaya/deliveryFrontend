import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SucursalServiceService } from '../sucursal-service.service';
import { empleado } from '../datos/empleado.model';
import { EmpleadoService } from '../empleado.service';
import { ProductoService } from '../producto.service';
import { producto } from '../datos/producto.model';

@Component({
  selector: 'app-sucursal-vista',
  templateUrl: './sucursal-vista.component.html',
  styleUrls: ['./sucursal-vista.component.css']
})
export class SucursalVistaComponent implements OnInit {

  empleados: empleado[] ;
  productos: producto[];
  
  displayedColumns: string[] = ['identificador','nombre', 'carnet','ver'];
  displayedColumns1: string[] = ['nombre', 'precio','ver'];

  constructor(private Sucursal:SucursalServiceService,private route:ActivatedRoute,private router:Router,private empleado:EmpleadoService,private producto:ProductoService) { }
  public dato=
    
  {
       
           nombre: 'Juan',
           direccion: 'B/..',
           ciudad: 'SC',
           telefono: '3',
          
 }; 
  ngOnInit() {

    

    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.Sucursal.sucursalOne(id).subscribe((res:any)=> this.dato=res.data);
        this.Sucursal.sucursalEmpleado(id).subscribe((data:any)=>this.empleados=data.data);
        this.Sucursal.sucursalProductos(id).subscribe((res:any)=>this.productos=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['sucursal']}}], 
  );

  
  }
  goToView(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['empleadoVista',id]}}],);
  }
  goToProduct(id)
  {
    this.router.navigate(['/menu',{outlets: {this: ['productoVista',id]}}],);
  }
}
