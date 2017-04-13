import { TestBed, inject } from '@angular/core/testing';

import { Service452Service } from './service-452.service';

describe('Service452Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service452Service]
    });
  });

  it('should ...', inject([Service452Service], (service: Service452Service) => {
    expect(service).toBeTruthy();
  }));
});
