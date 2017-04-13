import { TestBed, inject } from '@angular/core/testing';

import { Service28Service } from './service-28.service';

describe('Service28Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service28Service]
    });
  });

  it('should ...', inject([Service28Service], (service: Service28Service) => {
    expect(service).toBeTruthy();
  }));
});
