import { TestBed, inject } from '@angular/core/testing';

import { Service314Service } from './service-314.service';

describe('Service314Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service314Service]
    });
  });

  it('should ...', inject([Service314Service], (service: Service314Service) => {
    expect(service).toBeTruthy();
  }));
});
