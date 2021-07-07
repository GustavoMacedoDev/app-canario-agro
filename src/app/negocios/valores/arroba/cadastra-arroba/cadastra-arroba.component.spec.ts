import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraArrobaComponent } from './cadastra-arroba.component';

describe('CadastraArrobaComponent', () => {
  let component: CadastraArrobaComponent;
  let fixture: ComponentFixture<CadastraArrobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraArrobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraArrobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
