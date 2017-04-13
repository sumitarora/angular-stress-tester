import { TestBed, inject } from '@angular/core/testing';

import { Service13Service } from './service-13.service';

describe('Service13Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service13Service]
    });
  });

  it('should ...', inject([Service13Service], (service: Service13Service) => {
    expect(service).toBeTruthy();
  }));
});
