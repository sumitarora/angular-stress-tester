import { TestBed, inject } from '@angular/core/testing';

import { Service535Service } from './service-535.service';

describe('Service535Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service535Service]
    });
  });

  it('should ...', inject([Service535Service], (service: Service535Service) => {
    expect(service).toBeTruthy();
  }));
});
