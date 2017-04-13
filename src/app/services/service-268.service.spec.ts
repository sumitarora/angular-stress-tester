import { TestBed, inject } from '@angular/core/testing';

import { Service268Service } from './service-268.service';

describe('Service268Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service268Service]
    });
  });

  it('should ...', inject([Service268Service], (service: Service268Service) => {
    expect(service).toBeTruthy();
  }));
});
