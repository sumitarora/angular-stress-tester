import { TestBed, inject } from '@angular/core/testing';

import { Service40Service } from './service-40.service';

describe('Service40Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service40Service]
    });
  });

  it('should ...', inject([Service40Service], (service: Service40Service) => {
    expect(service).toBeTruthy();
  }));
});
