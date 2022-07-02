import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';
import { ProgramacionComponent } from './feature/programacion/components/listar-programacion/programacion.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'programacion', component: ProgramacionComponent, canActivate: [SecurityGuard]  },
  { path: 'registropr', loadChildren: () => import('./feature/programacion/programacion.module').then(mod => mod.ProgramacionModule) },
  { path: 'registroap', loadChildren: () => import('./feature/aprendices/aprendiz.module').then(mod => mod.AprendizModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
