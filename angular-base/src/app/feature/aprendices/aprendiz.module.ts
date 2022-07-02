import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RegistrarAprendizComponent } from './componentss/crear-aprendiz/registrar-aprendiz.component';
import { AprendizRoutingModule } from './aprendiz-routing.module';
import { AprendizService } from './shared/service/aprendiz.service';


@NgModule({
  declarations: [
    RegistrarAprendizComponent
  ],
  imports: [
    AprendizRoutingModule,
    SharedModule
  ],
  providers: [AprendizService]
})
export class AprendizModule { }