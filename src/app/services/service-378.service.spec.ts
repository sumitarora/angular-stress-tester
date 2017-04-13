import { TestBed, inject } from '@angular/core/testing';

import { Service378Service } from './service-378.service';

describe('Service378Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service378Service]
    });
  });

  it('should ...', inject([Service378Service], (service: Service378Service) => {
    expect(service).toBeTruthy();
  }));
});
