import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLoteComponent } from './lista-lote.component';

describe('ListaLoteComponent', () => {
  let component: ListaLoteComponent;
  let fixture: ComponentFixture<ListaLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
