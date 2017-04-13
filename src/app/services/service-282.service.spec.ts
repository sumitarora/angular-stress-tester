import { TestBed, inject } from '@angular/core/testing';

import { Service282Service } from './service-282.service';

describe('Service282Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service282Service]
    });
  });

  it('should ...', inject([Service282Service], (service: Service282Service) => {
    expect(service).toBeTruthy();
  }));
});
