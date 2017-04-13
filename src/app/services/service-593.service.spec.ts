import { TestBed, inject } from '@angular/core/testing';

import { Service593Service } from './service-593.service';

describe('Service593Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service593Service]
    });
  });

  it('should ...', inject([Service593Service], (service: Service593Service) => {
    expect(service).toBeTruthy();
  }));
});
