import { TestBed, inject } from '@angular/core/testing';

import { Service429Service } from './service-429.service';

describe('Service429Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service429Service]
    });
  });

  it('should ...', inject([Service429Service], (service: Service429Service) => {
    expect(service).toBeTruthy();
  }));
});
