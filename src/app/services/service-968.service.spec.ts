import { TestBed, inject } from '@angular/core/testing';

import { Service968Service } from './service-968.service';

describe('Service968Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service968Service]
    });
  });

  it('should ...', inject([Service968Service], (service: Service968Service) => {
    expect(service).toBeTruthy();
  }));
});
