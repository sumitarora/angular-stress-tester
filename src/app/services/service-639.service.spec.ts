import { TestBed, inject } from '@angular/core/testing';

import { Service639Service } from './service-639.service';

describe('Service639Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service639Service]
    });
  });

  it('should ...', inject([Service639Service], (service: Service639Service) => {
    expect(service).toBeTruthy();
  }));
});
