import { TestBed, inject } from '@angular/core/testing';

import { Service633Service } from './service-633.service';

describe('Service633Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service633Service]
    });
  });

  it('should ...', inject([Service633Service], (service: Service633Service) => {
    expect(service).toBeTruthy();
  }));
});
