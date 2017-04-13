import { TestBed, inject } from '@angular/core/testing';

import { Service60Service } from './service-60.service';

describe('Service60Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service60Service]
    });
  });

  it('should ...', inject([Service60Service], (service: Service60Service) => {
    expect(service).toBeTruthy();
  }));
});
