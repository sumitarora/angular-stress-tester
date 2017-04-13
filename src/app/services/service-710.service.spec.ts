import { TestBed, inject } from '@angular/core/testing';

import { Service710Service } from './service-710.service';

describe('Service710Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service710Service]
    });
  });

  it('should ...', inject([Service710Service], (service: Service710Service) => {
    expect(service).toBeTruthy();
  }));
});
