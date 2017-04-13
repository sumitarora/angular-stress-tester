import { TestBed, inject } from '@angular/core/testing';

import { Service570Service } from './service-570.service';

describe('Service570Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service570Service]
    });
  });

  it('should ...', inject([Service570Service], (service: Service570Service) => {
    expect(service).toBeTruthy();
  }));
});
