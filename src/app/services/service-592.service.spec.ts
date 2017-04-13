import { TestBed, inject } from '@angular/core/testing';

import { Service592Service } from './service-592.service';

describe('Service592Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service592Service]
    });
  });

  it('should ...', inject([Service592Service], (service: Service592Service) => {
    expect(service).toBeTruthy();
  }));
});
