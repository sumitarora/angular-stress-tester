import { TestBed, inject } from '@angular/core/testing';

import { Service836Service } from './service-836.service';

describe('Service836Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service836Service]
    });
  });

  it('should ...', inject([Service836Service], (service: Service836Service) => {
    expect(service).toBeTruthy();
  }));
});
