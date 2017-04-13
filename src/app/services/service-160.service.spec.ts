import { TestBed, inject } from '@angular/core/testing';

import { Service160Service } from './service-160.service';

describe('Service160Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service160Service]
    });
  });

  it('should ...', inject([Service160Service], (service: Service160Service) => {
    expect(service).toBeTruthy();
  }));
});
