import { TestBed, inject } from '@angular/core/testing';

import { Service273Service } from './service-273.service';

describe('Service273Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service273Service]
    });
  });

  it('should ...', inject([Service273Service], (service: Service273Service) => {
    expect(service).toBeTruthy();
  }));
});
