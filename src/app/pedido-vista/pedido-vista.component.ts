import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../pedido.service';
@Component({
  selector: 'app-pedido-vista',
  templateUrl: './pedido-vista.component.html',
  styleUrls: ['./pedido-vista.component.css']
})
export class PedidoVistaComponent implements OnInit {

  constructor(private pedido:PedidoService,private route:ActivatedRoute,private router:Router) { }
  public dato=
    
  {
       
    identificador: 0,
    precio:0,
    estado:"-",
    cliente:"Juan",
    conductor:0,
    administrador:0
          
 }; 
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      let id = parseInt(params.get('id'));
      if (Number.isInteger(id))
      {
        this.pedido.pedidoOne(id).subscribe((res:any)=> this.dato=res.data);
      }
      
      });
  }

  back()
  {
    this.router.navigate(['/menu',{outlets: {this: ['pedido']}}], 
  );
  }
}
