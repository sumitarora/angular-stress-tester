import { TestBed, inject } from '@angular/core/testing';

import { Service67Service } from './service-67.service';

describe('Service67Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service67Service]
    });
  });

  it('should ...', inject([Service67Service], (service: Service67Service) => {
    expect(service).toBeTruthy();
  }));
});
