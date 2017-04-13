import { TestBed, inject } from '@angular/core/testing';

import { Service819Service } from './service-819.service';

describe('Service819Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service819Service]
    });
  });

  it('should ...', inject([Service819Service], (service: Service819Service) => {
    expect(service).toBeTruthy();
  }));
});
