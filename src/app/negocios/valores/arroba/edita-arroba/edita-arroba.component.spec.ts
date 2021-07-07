import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaArrobaComponent } from './edita-arroba.component';

describe('EditaArrobaComponent', () => {
  let component: EditaArrobaComponent;
  let fixture: ComponentFixture<EditaArrobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaArrobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaArrobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
