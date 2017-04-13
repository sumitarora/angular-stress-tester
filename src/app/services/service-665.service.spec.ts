import { TestBed, inject } from '@angular/core/testing';

import { Service665Service } from './service-665.service';

describe('Service665Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service665Service]
    });
  });

  it('should ...', inject([Service665Service], (service: Service665Service) => {
    expect(service).toBeTruthy();
  }));
});
