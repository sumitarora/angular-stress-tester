import { TestBed, inject } from '@angular/core/testing';

import { Service100Service } from './service-100.service';

describe('Service100Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service100Service]
    });
  });

  it('should ...', inject([Service100Service], (service: Service100Service) => {
    expect(service).toBeTruthy();
  }));
});
