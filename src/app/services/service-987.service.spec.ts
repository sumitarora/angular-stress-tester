import { TestBed, inject } from '@angular/core/testing';

import { Service987Service } from './service-987.service';

describe('Service987Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service987Service]
    });
  });

  it('should ...', inject([Service987Service], (service: Service987Service) => {
    expect(service).toBeTruthy();
  }));
});
