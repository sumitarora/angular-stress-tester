import { TestBed, inject } from '@angular/core/testing';

import { Service737Service } from './service-737.service';

describe('Service737Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service737Service]
    });
  });

  it('should ...', inject([Service737Service], (service: Service737Service) => {
    expect(service).toBeTruthy();
  }));
});
