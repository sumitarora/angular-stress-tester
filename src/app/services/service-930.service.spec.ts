import { TestBed, inject } from '@angular/core/testing';

import { Service930Service } from './service-930.service';

describe('Service930Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service930Service]
    });
  });

  it('should ...', inject([Service930Service], (service: Service930Service) => {
    expect(service).toBeTruthy();
  }));
});
