import { TestBed, inject } from '@angular/core/testing';

import { Service252Service } from './service-252.service';

describe('Service252Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service252Service]
    });
  });

  it('should ...', inject([Service252Service], (service: Service252Service) => {
    expect(service).toBeTruthy();
  }));
});
