import { TestBed, inject } from '@angular/core/testing';

import { Service323Service } from './service-323.service';

describe('Service323Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service323Service]
    });
  });

  it('should ...', inject([Service323Service], (service: Service323Service) => {
    expect(service).toBeTruthy();
  }));
});
