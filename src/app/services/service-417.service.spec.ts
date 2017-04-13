import { TestBed, inject } from '@angular/core/testing';

import { Service417Service } from './service-417.service';

describe('Service417Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service417Service]
    });
  });

  it('should ...', inject([Service417Service], (service: Service417Service) => {
    expect(service).toBeTruthy();
  }));
});
