import { TestBed, inject } from '@angular/core/testing';

import { Service694Service } from './service-694.service';

describe('Service694Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service694Service]
    });
  });

  it('should ...', inject([Service694Service], (service: Service694Service) => {
    expect(service).toBeTruthy();
  }));
});
