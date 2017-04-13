import { TestBed, inject } from '@angular/core/testing';

import { Service280Service } from './service-280.service';

describe('Service280Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service280Service]
    });
  });

  it('should ...', inject([Service280Service], (service: Service280Service) => {
    expect(service).toBeTruthy();
  }));
});
