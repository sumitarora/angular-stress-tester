import { TestBed, inject } from '@angular/core/testing';

import { Service818Service } from './service-818.service';

describe('Service818Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service818Service]
    });
  });

  it('should ...', inject([Service818Service], (service: Service818Service) => {
    expect(service).toBeTruthy();
  }));
});
