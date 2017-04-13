import { TestBed, inject } from '@angular/core/testing';

import { Service5Service } from './service-5.service';

describe('Service5Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service5Service]
    });
  });

  it('should ...', inject([Service5Service], (service: Service5Service) => {
    expect(service).toBeTruthy();
  }));
});
