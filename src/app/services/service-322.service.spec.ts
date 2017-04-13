import { TestBed, inject } from '@angular/core/testing';

import { Service322Service } from './service-322.service';

describe('Service322Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service322Service]
    });
  });

  it('should ...', inject([Service322Service], (service: Service322Service) => {
    expect(service).toBeTruthy();
  }));
});
