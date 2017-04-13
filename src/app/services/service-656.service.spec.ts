import { TestBed, inject } from '@angular/core/testing';

import { Service656Service } from './service-656.service';

describe('Service656Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service656Service]
    });
  });

  it('should ...', inject([Service656Service], (service: Service656Service) => {
    expect(service).toBeTruthy();
  }));
});
