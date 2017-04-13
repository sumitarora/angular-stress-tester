import { TestBed, inject } from '@angular/core/testing';

import { Service795Service } from './service-795.service';

describe('Service795Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service795Service]
    });
  });

  it('should ...', inject([Service795Service], (service: Service795Service) => {
    expect(service).toBeTruthy();
  }));
});
