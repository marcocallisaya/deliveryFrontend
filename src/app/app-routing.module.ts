import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { SucursalFormComponent } from './sucursal-form/sucursal-form.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ReservaComponent } from './reserva/reserva.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProveedorFormComponent } from './proveedor-form/proveedor-form.component';
import { SucursalVistaComponent } from './sucursal-vista/sucursal-vista.component';
import { EmpleadoVistaComponent } from './empleado-vista/empleado-vista.component';
import { ClienteVistaComponent } from './cliente-vista/cliente-vista.component';
import { PedidoVistaComponent } from './pedido-vista/pedido-vista.component';
import { CategoriaVistaComponent } from './categoria-vista/categoria-vista.component';
import { ProveedorVistaComponent } from './proveedor-vista/proveedor-vista.component';
import { ProductoVistaComponent } from './producto-vista/producto-vista.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoComponent } from './producto/producto.component';
import { ReservaVistaComponent } from './reserva-vista/reserva-vista.component';
import { AutoComponent } from './auto/auto.component';
import { AutoFormComponent } from './auto-form/auto-form.component';
import { AutoVistaComponent } from './auto-vista/auto-vista.component';
import { AfterloginService } from './afterlogin.service';
import { PedidoFormComponent } from './pedido-form/pedido-form.component';
import { ReservaFormComponent } from './reserva-form/reserva-form.component';


const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'menu',component:ContenedorComponent,children:[
    {path:'sucursal',component:SucursalComponent,outlet:'this'},
    {path:'sucursalForm',component:SucursalFormComponent,outlet:'this'},
    {path:'sucursalForm/:id',component:SucursalFormComponent,outlet:'this'},
    {path:'sucursalVista/:id',component:SucursalVistaComponent,outlet:'this'},
    {path:'empleado',component:EmpleadoComponent,outlet:'this'},
    {path:'empleadoForm',component:EmpleadoFormComponent,outlet:'this'},
    {path:'empleadoForm/:id',component:EmpleadoFormComponent,outlet:'this'},
    {path:'empleadoVista/:id',component:EmpleadoVistaComponent,outlet:'this'},
    {path:'cliente',component:ClienteComponent,outlet:'this'},
    {path:'clienteForm',component:ClienteFormComponent,outlet:'this'},
    {path:'clienteForm/:id',component:ClienteFormComponent,outlet:'this'},
    {path:'clienteVista/:id',component:ClienteVistaComponent,outlet:'this'},
    {path:'pedido',component:PedidoComponent,outlet:'this'},
    {path:'pedidoVista/:id',component:PedidoVistaComponent,outlet:'this'},
    {path:'pedidoForm/:id',component:PedidoFormComponent,outlet:'this'},
    {path:'reserva',component:ReservaComponent,outlet:'this'},
    {path:'reservaVista/:id',component:ReservaVistaComponent,outlet:'this'},
    {path:'reservaForm/:id',component:ReservaFormComponent,outlet:'this'},
    {path:'categoria',component:CategoriaComponent,outlet:'this'},
    {path:'categoriaForm',component:CategoriaFormComponent,outlet:'this'},
    {path:'categoriaForm/:id',component:CategoriaFormComponent,outlet:'this'},
    {path:'categoriaVista/:id',component:CategoriaVistaComponent,outlet:'this'},
    {path:'proveedor',component:ProveedorComponent,outlet:'this'},
    {path:'proveedorForm',component:ProveedorFormComponent,outlet:'this'},
    {path:'proveedorForm/:id',component:ProveedorFormComponent,outlet:'this'},
    {path:'proveedorVista/:id',component:ProveedorVistaComponent,outlet:'this'},
    {path:'producto',component:ProductoComponent,outlet:'this'},
    {path:'productoForm',component:ProductoFormComponent,outlet:'this'},
    {path:'productoForm/:id',component:ProductoFormComponent,outlet:'this'},
    {path:'productoVista/:id',component:ProductoVistaComponent,outlet:'this'},
     {path:'auto',component:AutoComponent,outlet:'this'},
    {path:'autoForm',component:AutoFormComponent,outlet:'this'},
    {path:'autoForm/:id',component:AutoFormComponent,outlet:'this'},
    {path:'autoVista/:id',component:AutoVistaComponent,outlet:'this'},

  ],canActivate:[AfterloginService]},
 
  {path:'',redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  LoginComponent,
  ContenedorComponent,
  SucursalComponent,
  SucursalFormComponent,
  EmpleadoComponent,
    EmpleadoFormComponent,
    ClienteComponent,
    ClienteFormComponent,
    PedidoComponent,
    ReservaComponent,
    CategoriaComponent,
    CategoriaFormComponent,
    ProveedorComponent,
    ProveedorFormComponent,
    SucursalVistaComponent,
    EmpleadoVistaComponent,
    ClienteVistaComponent,
    PedidoVistaComponent,
    CategoriaVistaComponent,
    ProveedorVistaComponent,
    ProductoComponent,
    ProductoFormComponent,
    ProductoVistaComponent,
    ReservaVistaComponent,
    AutoComponent,
    AutoFormComponent,
    AutoVistaComponent,
    ReservaFormComponent,
    PedidoFormComponent
]
