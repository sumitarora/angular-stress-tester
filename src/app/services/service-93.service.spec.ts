import { TestBed, inject } from '@angular/core/testing';

import { Service93Service } from './service-93.service';

describe('Service93Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service93Service]
    });
  });

  it('should ...', inject([Service93Service], (service: Service93Service) => {
    expect(service).toBeTruthy();
  }));
});
