import { TestBed, inject } from '@angular/core/testing';

import { Service72Service } from './service-72.service';

describe('Service72Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service72Service]
    });
  });

  it('should ...', inject([Service72Service], (service: Service72Service) => {
    expect(service).toBeTruthy();
  }));
});
