import { TestBed, inject } from '@angular/core/testing';

import { Service80Service } from './service-80.service';

describe('Service80Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service80Service]
    });
  });

  it('should ...', inject([Service80Service], (service: Service80Service) => {
    expect(service).toBeTruthy();
  }));
});
