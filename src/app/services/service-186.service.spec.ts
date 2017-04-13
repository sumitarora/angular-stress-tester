import { TestBed, inject } from '@angular/core/testing';

import { Service186Service } from './service-186.service';

describe('Service186Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service186Service]
    });
  });

  it('should ...', inject([Service186Service], (service: Service186Service) => {
    expect(service).toBeTruthy();
  }));
});
