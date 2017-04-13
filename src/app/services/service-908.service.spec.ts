import { TestBed, inject } from '@angular/core/testing';

import { Service908Service } from './service-908.service';

describe('Service908Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service908Service]
    });
  });

  it('should ...', inject([Service908Service], (service: Service908Service) => {
    expect(service).toBeTruthy();
  }));
});
