import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { RegistrarProgramacionComponent } from './components/crear-programacion/registrar-programacion.component';
import { ProgramacionComponent } from './components/listar-programacion/programacion.component';
import { ProgramacionRoutingModule } from './programacion-routing.module';
import { ProgramacionService } from './shared/service/programacion.service';


@NgModule({
  declarations: [
    ProgramacionComponent,
    RegistrarProgramacionComponent
  ],
  imports: [
    ProgramacionRoutingModule,
    SharedModule
  ],
  providers: [ProgramacionService]
})
export class ProgramacionModule { }
