import { TestBed } from '@angular/core/testing';

import { TipoMedicamentoService } from './tipo-medicamento.service';

describe('TipoMedicamentoService', () => {
  let service: TipoMedicamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoMedicamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
