import { TestBed, inject } from '@angular/core/testing';

import { Service343Service } from './service-343.service';

describe('Service343Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service343Service]
    });
  });

  it('should ...', inject([Service343Service], (service: Service343Service) => {
    expect(service).toBeTruthy();
  }));
});
