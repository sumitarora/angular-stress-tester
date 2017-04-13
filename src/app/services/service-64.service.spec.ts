import { TestBed, inject } from '@angular/core/testing';

import { Service64Service } from './service-64.service';

describe('Service64Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service64Service]
    });
  });

  it('should ...', inject([Service64Service], (service: Service64Service) => {
    expect(service).toBeTruthy();
  }));
});
