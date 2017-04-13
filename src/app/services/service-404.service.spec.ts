import { TestBed, inject } from '@angular/core/testing';

import { Service404Service } from './service-404.service';

describe('Service404Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service404Service]
    });
  });

  it('should ...', inject([Service404Service], (service: Service404Service) => {
    expect(service).toBeTruthy();
  }));
});
