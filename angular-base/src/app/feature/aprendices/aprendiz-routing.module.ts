import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarAprendizComponent } from './componentss/crear-aprendiz/registrar-aprendiz.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrarAprendizComponent,
    children: [
      {
        path: 'crear',
        component: RegistrarAprendizComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprendizRoutingModule { }