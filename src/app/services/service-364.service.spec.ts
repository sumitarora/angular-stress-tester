import { TestBed, inject } from '@angular/core/testing';

import { Service364Service } from './service-364.service';

describe('Service364Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service364Service]
    });
  });

  it('should ...', inject([Service364Service], (service: Service364Service) => {
    expect(service).toBeTruthy();
  }));
});
