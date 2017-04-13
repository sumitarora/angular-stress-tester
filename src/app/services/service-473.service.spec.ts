import { TestBed, inject } from '@angular/core/testing';

import { Service473Service } from './service-473.service';

describe('Service473Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service473Service]
    });
  });

  it('should ...', inject([Service473Service], (service: Service473Service) => {
    expect(service).toBeTruthy();
  }));
});
