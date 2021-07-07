import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsVendaComponent } from './items-venda.component';

describe('ItemsVendaComponent', () => {
  let component: ItemsVendaComponent;
  let fixture: ComponentFixture<ItemsVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
