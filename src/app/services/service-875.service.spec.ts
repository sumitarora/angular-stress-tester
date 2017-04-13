import { TestBed, inject } from '@angular/core/testing';

import { Service875Service } from './service-875.service';

describe('Service875Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service875Service]
    });
  });

  it('should ...', inject([Service875Service], (service: Service875Service) => {
    expect(service).toBeTruthy();
  }));
});
