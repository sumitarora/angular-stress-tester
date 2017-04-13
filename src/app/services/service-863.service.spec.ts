import { TestBed, inject } from '@angular/core/testing';

import { Service863Service } from './service-863.service';

describe('Service863Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service863Service]
    });
  });

  it('should ...', inject([Service863Service], (service: Service863Service) => {
    expect(service).toBeTruthy();
  }));
});
