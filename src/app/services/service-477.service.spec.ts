import { TestBed, inject } from '@angular/core/testing';

import { Service477Service } from './service-477.service';

describe('Service477Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service477Service]
    });
  });

  it('should ...', inject([Service477Service], (service: Service477Service) => {
    expect(service).toBeTruthy();
  }));
});
