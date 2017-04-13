import { TestBed, inject } from '@angular/core/testing';

import { Service762Service } from './service-762.service';

describe('Service762Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service762Service]
    });
  });

  it('should ...', inject([Service762Service], (service: Service762Service) => {
    expect(service).toBeTruthy();
  }));
});
