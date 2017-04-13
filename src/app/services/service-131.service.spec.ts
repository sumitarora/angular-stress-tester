import { TestBed, inject } from '@angular/core/testing';

import { Service131Service } from './service-131.service';

describe('Service131Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service131Service]
    });
  });

  it('should ...', inject([Service131Service], (service: Service131Service) => {
    expect(service).toBeTruthy();
  }));
});
