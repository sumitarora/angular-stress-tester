import { TestBed, inject } from '@angular/core/testing';

import { Service304Service } from './service-304.service';

describe('Service304Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service304Service]
    });
  });

  it('should ...', inject([Service304Service], (service: Service304Service) => {
    expect(service).toBeTruthy();
  }));
});
