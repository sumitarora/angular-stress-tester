import { TestBed, inject } from '@angular/core/testing';

import { Service136Service } from './service-136.service';

describe('Service136Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service136Service]
    });
  });

  it('should ...', inject([Service136Service], (service: Service136Service) => {
    expect(service).toBeTruthy();
  }));
});
