import { TestBed, inject } from '@angular/core/testing';

import { Service301Service } from './service-301.service';

describe('Service301Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service301Service]
    });
  });

  it('should ...', inject([Service301Service], (service: Service301Service) => {
    expect(service).toBeTruthy();
  }));
});
