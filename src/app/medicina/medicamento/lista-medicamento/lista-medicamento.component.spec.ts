import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedicamentoComponent } from './lista-medicamento.component';

describe('ListaMedicamentoComponent', () => {
  let component: ListaMedicamentoComponent;
  let fixture: ComponentFixture<ListaMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
