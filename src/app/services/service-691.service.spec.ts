import { TestBed, inject } from '@angular/core/testing';

import { Service691Service } from './service-691.service';

describe('Service691Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service691Service]
    });
  });

  it('should ...', inject([Service691Service], (service: Service691Service) => {
    expect(service).toBeTruthy();
  }));
});
