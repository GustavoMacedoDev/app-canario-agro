import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNegociosComponent } from './home-negocios.component';

describe('HomeNegociosComponent', () => {
  let component: HomeNegociosComponent;
  let fixture: ComponentFixture<HomeNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
