import { TestBed, inject } from '@angular/core/testing';

import { Service838Service } from './service-838.service';

describe('Service838Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service838Service]
    });
  });

  it('should ...', inject([Service838Service], (service: Service838Service) => {
    expect(service).toBeTruthy();
  }));
});
