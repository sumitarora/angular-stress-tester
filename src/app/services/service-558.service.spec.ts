import { TestBed, inject } from '@angular/core/testing';

import { Service558Service } from './service-558.service';

describe('Service558Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service558Service]
    });
  });

  it('should ...', inject([Service558Service], (service: Service558Service) => {
    expect(service).toBeTruthy();
  }));
});
