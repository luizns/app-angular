import { TestBed } from '@angular/core/testing';

import { RemententesService } from './remententes.service';

describe('RemententesService', () => {
  let service: RemententesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemententesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
