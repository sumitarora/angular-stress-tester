import { TestBed, inject } from '@angular/core/testing';

import { Service123Service } from './service-123.service';

describe('Service123Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service123Service]
    });
  });

  it('should ...', inject([Service123Service], (service: Service123Service) => {
    expect(service).toBeTruthy();
  }));
});
