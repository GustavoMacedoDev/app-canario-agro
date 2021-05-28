import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraTipoComponent } from './cadastra-tipo.component';

describe('CadastraTipoComponent', () => {
  let component: CadastraTipoComponent;
  let fixture: ComponentFixture<CadastraTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
