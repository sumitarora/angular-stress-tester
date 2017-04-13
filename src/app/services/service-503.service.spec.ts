import { TestBed, inject } from '@angular/core/testing';

import { Service503Service } from './service-503.service';

describe('Service503Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service503Service]
    });
  });

  it('should ...', inject([Service503Service], (service: Service503Service) => {
    expect(service).toBeTruthy();
  }));
});
