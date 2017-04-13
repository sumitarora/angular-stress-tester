import { TestBed, inject } from '@angular/core/testing';

import { Service353Service } from './service-353.service';

describe('Service353Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service353Service]
    });
  });

  it('should ...', inject([Service353Service], (service: Service353Service) => {
    expect(service).toBeTruthy();
  }));
});
