import { TestBed, inject } from '@angular/core/testing';

import { Service975Service } from './service-975.service';

describe('Service975Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service975Service]
    });
  });

  it('should ...', inject([Service975Service], (service: Service975Service) => {
    expect(service).toBeTruthy();
  }));
});
