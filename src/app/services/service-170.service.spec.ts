import { TestBed, inject } from '@angular/core/testing';

import { Service170Service } from './service-170.service';

describe('Service170Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service170Service]
    });
  });

  it('should ...', inject([Service170Service], (service: Service170Service) => {
    expect(service).toBeTruthy();
  }));
});
