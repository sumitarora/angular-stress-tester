import { TestBed, inject } from '@angular/core/testing';

import { Service510Service } from './service-510.service';

describe('Service510Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service510Service]
    });
  });

  it('should ...', inject([Service510Service], (service: Service510Service) => {
    expect(service).toBeTruthy();
  }));
});
