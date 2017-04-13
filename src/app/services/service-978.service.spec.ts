import { TestBed, inject } from '@angular/core/testing';

import { Service978Service } from './service-978.service';

describe('Service978Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service978Service]
    });
  });

  it('should ...', inject([Service978Service], (service: Service978Service) => {
    expect(service).toBeTruthy();
  }));
});
