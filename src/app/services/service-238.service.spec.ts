import { TestBed, inject } from '@angular/core/testing';

import { Service238Service } from './service-238.service';

describe('Service238Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service238Service]
    });
  });

  it('should ...', inject([Service238Service], (service: Service238Service) => {
    expect(service).toBeTruthy();
  }));
});
