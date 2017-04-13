import { TestBed, inject } from '@angular/core/testing';

import { Service86Service } from './service-86.service';

describe('Service86Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service86Service]
    });
  });

  it('should ...', inject([Service86Service], (service: Service86Service) => {
    expect(service).toBeTruthy();
  }));
});
