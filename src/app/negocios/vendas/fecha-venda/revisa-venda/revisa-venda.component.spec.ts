import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisaVendaComponent } from './revisa-venda.component';

describe('RevisaVendaComponent', () => {
  let component: RevisaVendaComponent;
  let fixture: ComponentFixture<RevisaVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisaVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisaVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
