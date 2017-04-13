import { TestBed, inject } from '@angular/core/testing';

import { Service211Service } from './service-211.service';

describe('Service211Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service211Service]
    });
  });

  it('should ...', inject([Service211Service], (service: Service211Service) => {
    expect(service).toBeTruthy();
  }));
});
