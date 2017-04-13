import { TestBed, inject } from '@angular/core/testing';

import { Service237Service } from './service-237.service';

describe('Service237Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service237Service]
    });
  });

  it('should ...', inject([Service237Service], (service: Service237Service) => {
    expect(service).toBeTruthy();
  }));
});
