import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaVendaComponent } from './fecha-venda.component';

describe('FechaVendaComponent', () => {
  let component: FechaVendaComponent;
  let fixture: ComponentFixture<FechaVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechaVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
