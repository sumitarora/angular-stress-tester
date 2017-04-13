import { TestBed, inject } from '@angular/core/testing';

import { Service512Service } from './service-512.service';

describe('Service512Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service512Service]
    });
  });

  it('should ...', inject([Service512Service], (service: Service512Service) => {
    expect(service).toBeTruthy();
  }));
});
