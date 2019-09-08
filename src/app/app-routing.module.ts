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

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  {path:'menu',component:ContenedorComponent,children:[
    {path:'sucursal',component:SucursalComponent,outlet:'this'},
    {path:'sucursalForm',component:SucursalFormComponent,outlet:'this'},
    {path:'sucursalForm/:id',component:SucursalFormComponent,outlet:'this'},
    {path:'sucursalVista/:id',component:SucursalVistaComponent,outlet:'this'},
    {path:'empleado',component:EmpleadoComponent,outlet:'this'},
    {path:'empleadoForm',component:EmpleadoFormComponent,outlet:'this'},
    {path:'cliente',component:ClienteComponent,outlet:'this'},
    {path:'clienteForm',component:ClienteFormComponent,outlet:'this'},
    {path:'pedido',component:PedidoComponent,outlet:'this'},
    {path:'reserva',component:ReservaComponent,outlet:'this'},
    {path:'categoria',component:CategoriaComponent,outlet:'this'},
    {path:'categoriaForm',component:CategoriaFormComponent,outlet:'this'},
    {path:'proveedor',component:ProveedorComponent,outlet:'this'},
    {path:'proveedorForm',component:ProveedorFormComponent,outlet:'this'},

  ]},
 
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
    SucursalVistaComponent
]
