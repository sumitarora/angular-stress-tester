import { TestBed, inject } from '@angular/core/testing';

import { Service458Service } from './service-458.service';

describe('Service458Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service458Service]
    });
  });

  it('should ...', inject([Service458Service], (service: Service458Service) => {
    expect(service).toBeTruthy();
  }));
});
