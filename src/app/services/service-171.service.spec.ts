import { TestBed, inject } from '@angular/core/testing';

import { Service171Service } from './service-171.service';

describe('Service171Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service171Service]
    });
  });

  it('should ...', inject([Service171Service], (service: Service171Service) => {
    expect(service).toBeTruthy();
  }));
});
