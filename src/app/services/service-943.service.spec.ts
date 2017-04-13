import { TestBed, inject } from '@angular/core/testing';

import { Service943Service } from './service-943.service';

describe('Service943Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service943Service]
    });
  });

  it('should ...', inject([Service943Service], (service: Service943Service) => {
    expect(service).toBeTruthy();
  }));
});
