import { TestBed, inject } from '@angular/core/testing';

import { Service242Service } from './service-242.service';

describe('Service242Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service242Service]
    });
  });

  it('should ...', inject([Service242Service], (service: Service242Service) => {
    expect(service).toBeTruthy();
  }));
});
