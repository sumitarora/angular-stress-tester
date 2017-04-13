import { TestBed, inject } from '@angular/core/testing';

import { Service253Service } from './service-253.service';

describe('Service253Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service253Service]
    });
  });

  it('should ...', inject([Service253Service], (service: Service253Service) => {
    expect(service).toBeTruthy();
  }));
});
