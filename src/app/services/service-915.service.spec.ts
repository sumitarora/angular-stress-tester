import { TestBed, inject } from '@angular/core/testing';

import { Service915Service } from './service-915.service';

describe('Service915Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service915Service]
    });
  });

  it('should ...', inject([Service915Service], (service: Service915Service) => {
    expect(service).toBeTruthy();
  }));
});
