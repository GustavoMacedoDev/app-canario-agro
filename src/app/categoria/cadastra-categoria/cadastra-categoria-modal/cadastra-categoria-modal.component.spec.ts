import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCategoriaModalComponent } from './cadastra-categoria-modal.component';

describe('CadastraCategoriaModalComponent', () => {
  let component: CadastraCategoriaModalComponent;
  let fixture: ComponentFixture<CadastraCategoriaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraCategoriaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraCategoriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
