import { TestBed, inject } from '@angular/core/testing';

import { Service960Service } from './service-960.service';

describe('Service960Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service960Service]
    });
  });

  it('should ...', inject([Service960Service], (service: Service960Service) => {
    expect(service).toBeTruthy();
  }));
});
