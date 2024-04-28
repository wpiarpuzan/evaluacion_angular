import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';
import { ListarPlantasComponent } from './listar-plantas/listar-plantas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantasComponent, ListarPlantasComponent],
  exports: [PlantasComponent]
})
export class PlantasModule { }
