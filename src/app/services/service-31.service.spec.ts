import { TestBed, inject } from '@angular/core/testing';

import { Service31Service } from './service-31.service';

describe('Service31Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service31Service]
    });
  });

  it('should ...', inject([Service31Service], (service: Service31Service) => {
    expect(service).toBeTruthy();
  }));
});
