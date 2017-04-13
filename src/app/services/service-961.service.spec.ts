import { TestBed, inject } from '@angular/core/testing';

import { Service961Service } from './service-961.service';

describe('Service961Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service961Service]
    });
  });

  it('should ...', inject([Service961Service], (service: Service961Service) => {
    expect(service).toBeTruthy();
  }));
});
