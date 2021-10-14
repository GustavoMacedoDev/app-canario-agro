import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPessoaModalComponent } from './cadastra-pessoa-modal.component';

describe('CadastraPessoaModalComponent', () => {
  let component: CadastraPessoaModalComponent;
  let fixture: ComponentFixture<CadastraPessoaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraPessoaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPessoaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
