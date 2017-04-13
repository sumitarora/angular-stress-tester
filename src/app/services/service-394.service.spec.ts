import { TestBed, inject } from '@angular/core/testing';

import { Service394Service } from './service-394.service';

describe('Service394Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service394Service]
    });
  });

  it('should ...', inject([Service394Service], (service: Service394Service) => {
    expect(service).toBeTruthy();
  }));
});
