import { TestBed, inject } from '@angular/core/testing';

import { Service137Service } from './service-137.service';

describe('Service137Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service137Service]
    });
  });

  it('should ...', inject([Service137Service], (service: Service137Service) => {
    expect(service).toBeTruthy();
  }));
});
