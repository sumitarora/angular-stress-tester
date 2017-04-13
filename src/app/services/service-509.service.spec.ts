import { TestBed, inject } from '@angular/core/testing';

import { Service509Service } from './service-509.service';

describe('Service509Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service509Service]
    });
  });

  it('should ...', inject([Service509Service], (service: Service509Service) => {
    expect(service).toBeTruthy();
  }));
});
