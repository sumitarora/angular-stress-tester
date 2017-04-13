import { TestBed, inject } from '@angular/core/testing';

import { Service499Service } from './service-499.service';

describe('Service499Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service499Service]
    });
  });

  it('should ...', inject([Service499Service], (service: Service499Service) => {
    expect(service).toBeTruthy();
  }));
});
