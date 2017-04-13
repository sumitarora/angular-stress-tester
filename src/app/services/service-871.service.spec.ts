import { TestBed, inject } from '@angular/core/testing';

import { Service871Service } from './service-871.service';

describe('Service871Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service871Service]
    });
  });

  it('should ...', inject([Service871Service], (service: Service871Service) => {
    expect(service).toBeTruthy();
  }));
});
