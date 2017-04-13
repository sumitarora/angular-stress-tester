import { TestBed, inject } from '@angular/core/testing';

import { Service952Service } from './service-952.service';

describe('Service952Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service952Service]
    });
  });

  it('should ...', inject([Service952Service], (service: Service952Service) => {
    expect(service).toBeTruthy();
  }));
});
