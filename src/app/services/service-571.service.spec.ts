import { TestBed, inject } from '@angular/core/testing';

import { Service571Service } from './service-571.service';

describe('Service571Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service571Service]
    });
  });

  it('should ...', inject([Service571Service], (service: Service571Service) => {
    expect(service).toBeTruthy();
  }));
});
