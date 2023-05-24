import { TestBed } from '@angular/core/testing';

import { ServiceLService } from './service-l.service';

describe('ServiceLService', () => {
  let service: ServiceLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
