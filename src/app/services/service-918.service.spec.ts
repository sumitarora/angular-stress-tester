import { TestBed, inject } from '@angular/core/testing';

import { Service918Service } from './service-918.service';

describe('Service918Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service918Service]
    });
  });

  it('should ...', inject([Service918Service], (service: Service918Service) => {
    expect(service).toBeTruthy();
  }));
});
