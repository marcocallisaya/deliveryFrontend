import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { SucursalServiceService } from '../sucursal-service.service';

@Component({
  selector: 'app-sucursal-vista',
  templateUrl: './sucursal-vista.component.html',
  styleUrls: ['./sucursal-vista.component.css']
})
export class SucursalVistaComponent implements OnInit {

  constructor(private Sucursal:SucursalServiceService,private route:ActivatedRoute,private router:Router) { }
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
       // this.myform.setValue(this.dato);
     
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['sucursal']}}], 
  );
  }

}
