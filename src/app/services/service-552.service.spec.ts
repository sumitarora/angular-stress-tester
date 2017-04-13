import { TestBed, inject } from '@angular/core/testing';

import { Service552Service } from './service-552.service';

describe('Service552Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service552Service]
    });
  });

  it('should ...', inject([Service552Service], (service: Service552Service) => {
    expect(service).toBeTruthy();
  }));
});
