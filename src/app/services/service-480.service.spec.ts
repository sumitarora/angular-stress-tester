import { TestBed, inject } from '@angular/core/testing';

import { Service480Service } from './service-480.service';

describe('Service480Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service480Service]
    });
  });

  it('should ...', inject([Service480Service], (service: Service480Service) => {
    expect(service).toBeTruthy();
  }));
});
