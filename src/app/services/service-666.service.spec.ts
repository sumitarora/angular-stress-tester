import { TestBed, inject } from '@angular/core/testing';

import { Service666Service } from './service-666.service';

describe('Service666Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service666Service]
    });
  });

  it('should ...', inject([Service666Service], (service: Service666Service) => {
    expect(service).toBeTruthy();
  }));
});
