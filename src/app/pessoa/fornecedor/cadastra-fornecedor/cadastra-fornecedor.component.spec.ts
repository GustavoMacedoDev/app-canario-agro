import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraFornecedorComponent } from './cadastra-fornecedor.component';

describe('CadastraFornecedorComponent', () => {
  let component: CadastraFornecedorComponent;
  let fixture: ComponentFixture<CadastraFornecedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraFornecedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
