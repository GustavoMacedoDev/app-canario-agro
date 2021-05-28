import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraRacaComponent } from './cadastra-raca.component';

describe('CadastraRacaComponent', () => {
  let component: CadastraRacaComponent;
  let fixture: ComponentFixture<CadastraRacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraRacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraRacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
