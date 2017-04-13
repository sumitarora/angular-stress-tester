import { TestBed, inject } from '@angular/core/testing';

import { Service885Service } from './service-885.service';

describe('Service885Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service885Service]
    });
  });

  it('should ...', inject([Service885Service], (service: Service885Service) => {
    expect(service).toBeTruthy();
  }));
});
