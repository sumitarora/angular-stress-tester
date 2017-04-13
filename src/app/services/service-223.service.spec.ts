import { TestBed, inject } from '@angular/core/testing';

import { Service223Service } from './service-223.service';

describe('Service223Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service223Service]
    });
  });

  it('should ...', inject([Service223Service], (service: Service223Service) => {
    expect(service).toBeTruthy();
  }));
});
