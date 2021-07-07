import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraVendaComponent } from './cadastra-venda.component';

describe('CadastraVendaComponent', () => {
  let component: CadastraVendaComponent;
  let fixture: ComponentFixture<CadastraVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
