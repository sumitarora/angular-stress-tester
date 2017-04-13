import { TestBed, inject } from '@angular/core/testing';

import { Service951Service } from './service-951.service';

describe('Service951Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service951Service]
    });
  });

  it('should ...', inject([Service951Service], (service: Service951Service) => {
    expect(service).toBeTruthy();
  }));
});
