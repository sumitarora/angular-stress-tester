import { TestBed, inject } from '@angular/core/testing';

import { Service573Service } from './service-573.service';

describe('Service573Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service573Service]
    });
  });

  it('should ...', inject([Service573Service], (service: Service573Service) => {
    expect(service).toBeTruthy();
  }));
});
