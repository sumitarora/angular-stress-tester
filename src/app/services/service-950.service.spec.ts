import { TestBed, inject } from '@angular/core/testing';

import { Service950Service } from './service-950.service';

describe('Service950Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service950Service]
    });
  });

  it('should ...', inject([Service950Service], (service: Service950Service) => {
    expect(service).toBeTruthy();
  }));
});
