import { Component, OnInit } from '@angular/core';
import { PlantasService } from '../plantas.service';
import { Planta } from '../Planta';

@Component({
  selector: 'app-listar-plantas',
  templateUrl: './listar-plantas.component.html',
  styleUrls: ['./listar-plantas.component.css']
})
export class ListarPlantasComponent implements OnInit {

  constructor(private plantasService: PlantasService) { }

  plantas: Array<Planta> = [];

  getPlantas(){
    this.plantasService.getPlantas().subscribe(plantas =>{
      this.plantas = plantas;
    });
  }
  numeroPlantasTipo(tipo: string): number{
    return this.plantas.filter(planta => planta.tipo === tipo).length;
  }

  ngOnInit() {
    this.getPlantas();
  }

}
