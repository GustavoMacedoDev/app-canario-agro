import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraRacaModalComponent } from './cadastra-raca-modal.component';

describe('CadastraRacaModalComponent', () => {
  let component: CadastraRacaModalComponent;
  let fixture: ComponentFixture<CadastraRacaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraRacaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraRacaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
