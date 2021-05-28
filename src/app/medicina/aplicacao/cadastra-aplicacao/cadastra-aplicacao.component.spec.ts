import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAplicacaoComponent } from './cadastra-aplicacao.component';

describe('CadastraAplicacaoComponent', () => {
  let component: CadastraAplicacaoComponent;
  let fixture: ComponentFixture<CadastraAplicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraAplicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraAplicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
