import { TestBed, inject } from '@angular/core/testing';

import { Service192Service } from './service-192.service';

describe('Service192Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service192Service]
    });
  });

  it('should ...', inject([Service192Service], (service: Service192Service) => {
    expect(service).toBeTruthy();
  }));
});
