import { TestBed, inject } from '@angular/core/testing';

import { Service841Service } from './service-841.service';

describe('Service841Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service841Service]
    });
  });

  it('should ...', inject([Service841Service], (service: Service841Service) => {
    expect(service).toBeTruthy();
  }));
});
