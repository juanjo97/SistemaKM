import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
//LoginComponent
import { LoginComponent } from'./login/login.component';
import { MenuComponent } from'./menu/menu.component';
import { AreasComponent } from'./areas/areas.component';
import { UsuariosComponent } from'./usuarios/usuarios.component';
import { MenuNavbarComponent } from'./menu-navbar/menu-navbar.component';
import { PuestosComponent } from'./puestos/puestos.component';
import { ProcesosComponent } from'./procesos/procesos.component';

const routes: Routes = [
//ruta inicial del login
{ path:'', component: LoginComponent },
//ruta del menu inicial
{ path:'menu', component:MenuComponent },
//ruta para dar de alta u nuevo usuairo
{ path:'usuarios',component:UsuariosComponent },
//routing para ingresar a las areas
{ path:'areas', component:AreasComponent },
//Contenedor de los usuarios
{ path:'usuario', component:UsuariosComponent },
//barra de menu siempre fija en cada una de las ventanas
{ path:'menu-navbar', component:MenuNavbarComponent },
//ruta de acceso para la ventana de los puestos
{ path:'puestos', component:PuestosComponent },

{ path:'procesos',component:ProcesosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
