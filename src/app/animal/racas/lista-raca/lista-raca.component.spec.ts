import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRacaComponent } from './lista-raca.component';

describe('ListaRacaComponent', () => {
  let component: ListaRacaComponent;
  let fixture: ComponentFixture<ListaRacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaRacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
