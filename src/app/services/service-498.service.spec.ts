import { TestBed, inject } from '@angular/core/testing';

import { Service498Service } from './service-498.service';

describe('Service498Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service498Service]
    });
  });

  it('should ...', inject([Service498Service], (service: Service498Service) => {
    expect(service).toBeTruthy();
  }));
});
