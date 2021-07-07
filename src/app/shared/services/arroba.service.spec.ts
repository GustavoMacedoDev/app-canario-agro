import { TestBed } from '@angular/core/testing';

import { ArrobaService } from './arroba.service';

describe('ArrobaService', () => {
  let service: ArrobaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrobaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
