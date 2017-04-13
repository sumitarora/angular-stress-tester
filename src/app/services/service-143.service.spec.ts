import { TestBed, inject } from '@angular/core/testing';

import { Service143Service } from './service-143.service';

describe('Service143Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service143Service]
    });
  });

  it('should ...', inject([Service143Service], (service: Service143Service) => {
    expect(service).toBeTruthy();
  }));
});
