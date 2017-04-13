import { TestBed, inject } from '@angular/core/testing';

import { Service555Service } from './service-555.service';

describe('Service555Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service555Service]
    });
  });

  it('should ...', inject([Service555Service], (service: Service555Service) => {
    expect(service).toBeTruthy();
  }));
});
