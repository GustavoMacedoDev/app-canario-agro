import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnimalComponent } from './home-animal.component';

describe('HomeAnimalComponent', () => {
  let component: HomeAnimalComponent;
  let fixture: ComponentFixture<HomeAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
