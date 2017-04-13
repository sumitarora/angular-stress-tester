import { TestBed, inject } from '@angular/core/testing';

import { Service75Service } from './service-75.service';

describe('Service75Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service75Service]
    });
  });

  it('should ...', inject([Service75Service], (service: Service75Service) => {
    expect(service).toBeTruthy();
  }));
});
