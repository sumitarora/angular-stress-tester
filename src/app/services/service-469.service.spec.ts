import { TestBed, inject } from '@angular/core/testing';

import { Service469Service } from './service-469.service';

describe('Service469Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service469Service]
    });
  });

  it('should ...', inject([Service469Service], (service: Service469Service) => {
    expect(service).toBeTruthy();
  }));
});
