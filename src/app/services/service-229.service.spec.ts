import { TestBed, inject } from '@angular/core/testing';

import { Service229Service } from './service-229.service';

describe('Service229Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service229Service]
    });
  });

  it('should ...', inject([Service229Service], (service: Service229Service) => {
    expect(service).toBeTruthy();
  }));
});
