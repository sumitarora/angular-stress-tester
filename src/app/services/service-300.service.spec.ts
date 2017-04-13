import { TestBed, inject } from '@angular/core/testing';

import { Service300Service } from './service-300.service';

describe('Service300Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service300Service]
    });
  });

  it('should ...', inject([Service300Service], (service: Service300Service) => {
    expect(service).toBeTruthy();
  }));
});
