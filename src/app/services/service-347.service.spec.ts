import { TestBed, inject } from '@angular/core/testing';

import { Service347Service } from './service-347.service';

describe('Service347Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service347Service]
    });
  });

  it('should ...', inject([Service347Service], (service: Service347Service) => {
    expect(service).toBeTruthy();
  }));
});
