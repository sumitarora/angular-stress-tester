import { TestBed, inject } from '@angular/core/testing';

import { Service551Service } from './service-551.service';

describe('Service551Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service551Service]
    });
  });

  it('should ...', inject([Service551Service], (service: Service551Service) => {
    expect(service).toBeTruthy();
  }));
});
