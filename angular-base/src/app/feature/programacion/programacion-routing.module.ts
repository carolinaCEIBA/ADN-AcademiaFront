import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarProgramacionComponent } from './components/crear-programacion/registrar-programacion.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrarProgramacionComponent,
    children: [
      {
        path: 'crear',
        component: RegistrarProgramacionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramacionRoutingModule { }
