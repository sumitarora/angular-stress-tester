import { TestBed, inject } from '@angular/core/testing';

import { Service850Service } from './service-850.service';

describe('Service850Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service850Service]
    });
  });

  it('should ...', inject([Service850Service], (service: Service850Service) => {
    expect(service).toBeTruthy();
  }));
});
