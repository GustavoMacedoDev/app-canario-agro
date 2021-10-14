import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAnimalComponent } from './edita-animal.component';

describe('EditaAnimalComponent', () => {
  let component: EditaAnimalComponent;
  let fixture: ComponentFixture<EditaAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
