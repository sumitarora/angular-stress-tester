import { TestBed, inject } from '@angular/core/testing';

import { Service537Service } from './service-537.service';

describe('Service537Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service537Service]
    });
  });

  it('should ...', inject([Service537Service], (service: Service537Service) => {
    expect(service).toBeTruthy();
  }));
});
