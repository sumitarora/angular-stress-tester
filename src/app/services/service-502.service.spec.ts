import { TestBed, inject } from '@angular/core/testing';

import { Service502Service } from './service-502.service';

describe('Service502Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service502Service]
    });
  });

  it('should ...', inject([Service502Service], (service: Service502Service) => {
    expect(service).toBeTruthy();
  }));
});
