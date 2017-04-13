import { TestBed, inject } from '@angular/core/testing';

import { Service199Service } from './service-199.service';

describe('Service199Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service199Service]
    });
  });

  it('should ...', inject([Service199Service], (service: Service199Service) => {
    expect(service).toBeTruthy();
  }));
});
