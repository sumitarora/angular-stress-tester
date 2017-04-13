import { TestBed, inject } from '@angular/core/testing';

import { Service610Service } from './service-610.service';

describe('Service610Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service610Service]
    });
  });

  it('should ...', inject([Service610Service], (service: Service610Service) => {
    expect(service).toBeTruthy();
  }));
});
