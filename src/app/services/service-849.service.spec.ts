import { TestBed, inject } from '@angular/core/testing';

import { Service849Service } from './service-849.service';

describe('Service849Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service849Service]
    });
  });

  it('should ...', inject([Service849Service], (service: Service849Service) => {
    expect(service).toBeTruthy();
  }));
});
