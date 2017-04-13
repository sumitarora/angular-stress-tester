import { TestBed, inject } from '@angular/core/testing';

import { Service45Service } from './service-45.service';

describe('Service45Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service45Service]
    });
  });

  it('should ...', inject([Service45Service], (service: Service45Service) => {
    expect(service).toBeTruthy();
  }));
});
