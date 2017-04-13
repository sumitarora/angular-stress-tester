import { TestBed, inject } from '@angular/core/testing';

import { Service276Service } from './service-276.service';

describe('Service276Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service276Service]
    });
  });

  it('should ...', inject([Service276Service], (service: Service276Service) => {
    expect(service).toBeTruthy();
  }));
});
