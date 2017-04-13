import { TestBed, inject } from '@angular/core/testing';

import { Service126Service } from './service-126.service';

describe('Service126Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service126Service]
    });
  });

  it('should ...', inject([Service126Service], (service: Service126Service) => {
    expect(service).toBeTruthy();
  }));
});
