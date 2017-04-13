import { TestBed, inject } from '@angular/core/testing';

import { Service157Service } from './service-157.service';

describe('Service157Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service157Service]
    });
  });

  it('should ...', inject([Service157Service], (service: Service157Service) => {
    expect(service).toBeTruthy();
  }));
});
