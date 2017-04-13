import { TestBed, inject } from '@angular/core/testing';

import { Service305Service } from './service-305.service';

describe('Service305Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service305Service]
    });
  });

  it('should ...', inject([Service305Service], (service: Service305Service) => {
    expect(service).toBeTruthy();
  }));
});
