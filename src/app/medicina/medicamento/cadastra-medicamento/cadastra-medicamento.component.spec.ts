import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraMedicamentoComponent } from './cadastra-medicamento.component';

describe('CadastraMedicamentoComponent', () => {
  let component: CadastraMedicamentoComponent;
  let fixture: ComponentFixture<CadastraMedicamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraMedicamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
