import { TestBed, inject } from '@angular/core/testing';

import { Service87Service } from './service-87.service';

describe('Service87Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service87Service]
    });
  });

  it('should ...', inject([Service87Service], (service: Service87Service) => {
    expect(service).toBeTruthy();
  }));
});
