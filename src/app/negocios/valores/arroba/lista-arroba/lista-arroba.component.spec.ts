import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArrobaComponent } from './lista-arroba.component';

describe('ListaArrobaComponent', () => {
  let component: ListaArrobaComponent;
  let fixture: ComponentFixture<ListaArrobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaArrobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArrobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
