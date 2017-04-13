import { TestBed, inject } from '@angular/core/testing';

import { Service163Service } from './service-163.service';

describe('Service163Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service163Service]
    });
  });

  it('should ...', inject([Service163Service], (service: Service163Service) => {
    expect(service).toBeTruthy();
  }));
});
