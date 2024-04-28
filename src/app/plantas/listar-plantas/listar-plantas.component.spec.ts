/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ListarPlantasComponent } from './listar-plantas.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Planta } from '../Planta';

describe('ListarPlantasComponent', () => {
  let component: ListarPlantasComponent;
  let fixture: ComponentFixture<ListarPlantasComponent>;
  let plantas: Array<Planta>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ ListarPlantasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //asignando 5 elementos de plantas a la lista
    let planta1 = new Planta(1,'Crotón','Codiaeum variegatum','Interior',200,'Templado Calido','');    
    let planta2 = new Planta(2,'Filodendro','Philodendron spp.','Interior',300,'Templado Calido','');
    let planta3 = new Planta(3,'Photos','Epipremnum aureum','Interior',200,'Templado Calido','');
    let planta4 = new Planta(4,'Crisantemo','Chrysanthemum spp.','Exterior',60,'Templado Calido','');
    let planta5 = new Planta(5,'Hortensia','Hydrangea spp.','Exterior',200,'Templado Calido','');
    plantas = [planta1, planta2,planta3,planta4,planta5];  
    component.plantas = plantas;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Table should has 5 rows of Plants (Crotón, Filodendro, Photos, Crisantemo, Hortensia)', () => {
    //Se cuenta que el DOM tenga 5 elementos renderizados
    const count = debug.queryAll(By.css('tbody tr')).length;
    expect(count).toEqual(5);
    
  });

  it('Table should has a header with elements (# , Nombre común, Tipo, Clima)', () => {
    //Verifica que la cabecera se renderice de manera completa
    const elements = debug.query(By.css('thead')).query(By.css('tr')).queryAll(By.css('th'));
    const numeral: HTMLElement = elements[0].nativeElement;
    expect(numeral.textContent).toEqual('#');
    const nombreComun: HTMLElement = elements[1].nativeElement;
    expect(nombreComun.textContent).toEqual('Nombre común');
    const tipo: HTMLElement = elements[2].nativeElement;
    expect(tipo.textContent).toEqual('Tipo');
    const clima: HTMLElement = elements[3].nativeElement;
    expect(clima.textContent).toEqual('Clima');
    
  });
  

  it('Table should render a Plant with Nombnre Común (Crotón, Photos)', () => {
    const elements = debug?.queryAll(By.css('tbody tr'));
    const croton = elements[0];
    const photos = elements[2];
    //Compara que el nombre común de la planta 1 renderizada sea Crotón   
    const contentCroton: HTMLElement = croton?.queryAll(By.css('td'))[1]?.query(By.css('dd'))?.nativeElement;
    expect(contentCroton.textContent).toEqual('Crotón');
    //Compara que el nombre común de la planta 3 renderizada sea Photos    
    const contentPhotos: HTMLElement = photos?.queryAll(By.css('td'))[1]?.query(By.css('dd'))?.nativeElement;
    expect(contentPhotos.textContent).toEqual('Photos');    
  });

});
