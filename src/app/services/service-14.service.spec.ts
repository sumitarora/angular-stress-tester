import { TestBed, inject } from '@angular/core/testing';

import { Service14Service } from './service-14.service';

describe('Service14Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service14Service]
    });
  });

  it('should ...', inject([Service14Service], (service: Service14Service) => {
    expect(service).toBeTruthy();
  }));
});
