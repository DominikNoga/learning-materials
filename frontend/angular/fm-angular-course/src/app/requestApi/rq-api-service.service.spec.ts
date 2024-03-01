import { TestBed } from '@angular/core/testing';

import { RqApiServiceService } from './rq-api-service.service';

describe('RqApiServiceService', () => {
  let service: RqApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RqApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
