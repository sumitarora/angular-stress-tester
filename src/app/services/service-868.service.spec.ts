import { TestBed, inject } from '@angular/core/testing';

import { Service868Service } from './service-868.service';

describe('Service868Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service868Service]
    });
  });

  it('should ...', inject([Service868Service], (service: Service868Service) => {
    expect(service).toBeTruthy();
  }));
});
