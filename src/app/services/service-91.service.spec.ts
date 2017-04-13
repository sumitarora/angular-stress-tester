import { TestBed, inject } from '@angular/core/testing';

import { Service91Service } from './service-91.service';

describe('Service91Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service91Service]
    });
  });

  it('should ...', inject([Service91Service], (service: Service91Service) => {
    expect(service).toBeTruthy();
  }));
});
