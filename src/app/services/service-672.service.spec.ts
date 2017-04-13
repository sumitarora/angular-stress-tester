import { TestBed, inject } from '@angular/core/testing';

import { Service672Service } from './service-672.service';

describe('Service672Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service672Service]
    });
  });

  it('should ...', inject([Service672Service], (service: Service672Service) => {
    expect(service).toBeTruthy();
  }));
});
