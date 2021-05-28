import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutorComponent } from './lista-produtor.component';

describe('ListaProdutorComponent', () => {
  let component: ListaProdutorComponent;
  let fixture: ComponentFixture<ListaProdutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
