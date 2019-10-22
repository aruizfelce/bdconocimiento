import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent} from './components/inicio/inicio.component';
import { CategoriasComponent} from './components/admin/categorias/categorias.component';
import { TipsComponent} from './components/admin/tips/tips.component';
import { LoginComponent} from './components/users/login/login.component';
import { PerfilComponent} from './components/users/perfil/perfil.component';
import { RegistrarComponent} from './components/users/registrar/registrar.component';

const routes: Routes = [
  { path: '', component: InicioComponent,pathMatch:'full'},
  { path: 'admin/categorias', component: CategoriasComponent},
  { path: 'admin/tips',component: TipsComponent},
  { path: 'user/login', component: LoginComponent},
  { path: 'user/perfil' , component: PerfilComponent},
  { path: 'user/registrar' , component: RegistrarComponent},
  { path: '**', redirectTo: '/', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
