import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { AutoService } from '../auto.service';

@Component({
  selector: 'app-auto-vista',
  templateUrl: './auto-vista.component.html',
  styleUrls: ['./auto-vista.component.css']
})
export class AutoVistaComponent implements OnInit {

 
  
  constructor(private auto:AutoService,private route:ActivatedRoute,private router:Router) { }
  public dato=
    
  {  
    identificador:0,
    modeloAuto: "-",
    placaAuto: "-",
    conductor: 0,
    fechaCreacion:"-",
    ultimaActualizacion:"-" 
          
 }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.auto.autoOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['auto']}}], 
  );
  }

  

}
