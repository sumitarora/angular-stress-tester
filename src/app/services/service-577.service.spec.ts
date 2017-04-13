import { TestBed, inject } from '@angular/core/testing';

import { Service577Service } from './service-577.service';

describe('Service577Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service577Service]
    });
  });

  it('should ...', inject([Service577Service], (service: Service577Service) => {
    expect(service).toBeTruthy();
  }));
});
