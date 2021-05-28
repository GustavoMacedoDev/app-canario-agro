import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraProdutorComponent } from './cadastra-produtor.component';

describe('CadastraProdutorComponent', () => {
  let component: CadastraProdutorComponent;
  let fixture: ComponentFixture<CadastraProdutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraProdutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
