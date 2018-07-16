import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
//importacion de los modales
import { AltaUsuarioComponent } from'./usuarios/modales-alta/alta-usuario/alta-usuario.component';


//componentes de angular material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AreasComponent } from './areas/areas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MatMenuModule} from '@angular/material/menu';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { PuestosComponent } from './puestos/puestos.component';
import { ProcesosComponent } from './procesos/procesos.component';


@NgModule({
  declarations: [
  //todos los componentes se tienen que dar alta aquí sin excepciopnes
    AppComponent,
    LoginComponent,
    MenuComponent,
    AreasComponent,
    UsuariosComponent,
    AltaUsuarioComponent,
    MenuNavbarComponent,
    PuestosComponent,
    ProcesosComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  //modales dentro de los componententes de entrada
  entryComponents:[
    AltaUsuarioComponent
   ]
})
export class AppModule { }
