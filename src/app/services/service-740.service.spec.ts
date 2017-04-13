import { TestBed, inject } from '@angular/core/testing';

import { Service740Service } from './service-740.service';

describe('Service740Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service740Service]
    });
  });

  it('should ...', inject([Service740Service], (service: Service740Service) => {
    expect(service).toBeTruthy();
  }));
});
