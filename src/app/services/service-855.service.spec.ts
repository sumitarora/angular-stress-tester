import { TestBed, inject } from '@angular/core/testing';

import { Service855Service } from './service-855.service';

describe('Service855Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service855Service]
    });
  });

  it('should ...', inject([Service855Service], (service: Service855Service) => {
    expect(service).toBeTruthy();
  }));
});
