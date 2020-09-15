import { TestBed } from '@angular/core/testing';

import { EnghawService } from './enghaw.service';

describe('EnghawService', () => {
  let service: EnghawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnghawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
