import { TestBed, inject } from '@angular/core/testing';

import { Service909Service } from './service-909.service';

describe('Service909Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service909Service]
    });
  });

  it('should ...', inject([Service909Service], (service: Service909Service) => {
    expect(service).toBeTruthy();
  }));
});
