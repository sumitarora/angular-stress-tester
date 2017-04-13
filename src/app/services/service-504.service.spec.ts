import { TestBed, inject } from '@angular/core/testing';

import { Service504Service } from './service-504.service';

describe('Service504Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service504Service]
    });
  });

  it('should ...', inject([Service504Service], (service: Service504Service) => {
    expect(service).toBeTruthy();
  }));
});
