import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancaPesoComponent } from './lanca-peso.component';

describe('LancaPesoComponent', () => {
  let component: LancaPesoComponent;
  let fixture: ComponentFixture<LancaPesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancaPesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancaPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
