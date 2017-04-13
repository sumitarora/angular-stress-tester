import { TestBed, inject } from '@angular/core/testing';

import { Service78Service } from './service-78.service';

describe('Service78Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service78Service]
    });
  });

  it('should ...', inject([Service78Service], (service: Service78Service) => {
    expect(service).toBeTruthy();
  }));
});
