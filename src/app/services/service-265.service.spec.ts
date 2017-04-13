import { TestBed, inject } from '@angular/core/testing';

import { Service265Service } from './service-265.service';

describe('Service265Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service265Service]
    });
  });

  it('should ...', inject([Service265Service], (service: Service265Service) => {
    expect(service).toBeTruthy();
  }));
});
