import { TestBed, inject } from '@angular/core/testing';

import { Service917Service } from './service-917.service';

describe('Service917Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service917Service]
    });
  });

  it('should ...', inject([Service917Service], (service: Service917Service) => {
    expect(service).toBeTruthy();
  }));
});
