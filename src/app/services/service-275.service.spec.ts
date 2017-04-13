import { TestBed, inject } from '@angular/core/testing';

import { Service275Service } from './service-275.service';

describe('Service275Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service275Service]
    });
  });

  it('should ...', inject([Service275Service], (service: Service275Service) => {
    expect(service).toBeTruthy();
  }));
});
