import { TestBed, inject } from '@angular/core/testing';

import { Service33Service } from './service-33.service';

describe('Service33Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service33Service]
    });
  });

  it('should ...', inject([Service33Service], (service: Service33Service) => {
    expect(service).toBeTruthy();
  }));
});
