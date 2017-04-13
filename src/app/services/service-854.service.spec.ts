import { TestBed, inject } from '@angular/core/testing';

import { Service854Service } from './service-854.service';

describe('Service854Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service854Service]
    });
  });

  it('should ...', inject([Service854Service], (service: Service854Service) => {
    expect(service).toBeTruthy();
  }));
});
