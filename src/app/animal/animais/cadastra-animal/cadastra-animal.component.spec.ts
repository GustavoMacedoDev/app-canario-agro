import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAnimalComponent } from './cadastra-animal.component';

describe('CadastraAnimalComponent', () => {
  let component: CadastraAnimalComponent;
  let fixture: ComponentFixture<CadastraAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
