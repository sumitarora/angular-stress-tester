import { TestBed, inject } from '@angular/core/testing';

import { Service934Service } from './service-934.service';

describe('Service934Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service934Service]
    });
  });

  it('should ...', inject([Service934Service], (service: Service934Service) => {
    expect(service).toBeTruthy();
  }));
});
