import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraLoteComponent } from './cadastra-lote.component';

describe('CadastraLoteComponent', () => {
  let component: CadastraLoteComponent;
  let fixture: ComponentFixture<CadastraLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
