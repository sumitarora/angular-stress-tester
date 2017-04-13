import { TestBed, inject } from '@angular/core/testing';

import { Service94Service } from './service-94.service';

describe('Service94Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service94Service]
    });
  });

  it('should ...', inject([Service94Service], (service: Service94Service) => {
    expect(service).toBeTruthy();
  }));
});
