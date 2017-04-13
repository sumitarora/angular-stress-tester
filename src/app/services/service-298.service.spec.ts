import { TestBed, inject } from '@angular/core/testing';

import { Service298Service } from './service-298.service';

describe('Service298Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service298Service]
    });
  });

  it('should ...', inject([Service298Service], (service: Service298Service) => {
    expect(service).toBeTruthy();
  }));
});
