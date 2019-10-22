import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/users/login/login.component';
import { PerfilComponent } from './components/users/perfil/perfil.component';
import { RegistrarComponent } from './components/users/registrar/registrar.component';
import { CategoriasComponent } from './components/admin/categorias/categorias.component';
import { ListaCategoriasComponent } from './components/admin/sub-categorias/lista-categorias/lista-categorias.component';
import { FormCategoriasComponent } from './components/admin/sub-categorias/form-categorias/form-categorias.component';
import { TipsComponent } from './components/admin/tips/tips.component';
import { TipsListaComponent } from './components/admin/sub-tips/tips-lista/tips-lista.component';
import { TipsFormularioComponent } from './components/admin/sub-tips/tips-formulario/tips-formulario.component';
  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    LoginComponent,
    PerfilComponent,
    RegistrarComponent,
    CategoriasComponent,
    ListaCategoriasComponent,
    FormCategoriasComponent,
    TipsComponent,
    TipsListaComponent,
    TipsFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
    
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
