import { TestBed, inject } from '@angular/core/testing';

import { Service140Service } from './service-140.service';

describe('Service140Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service140Service]
    });
  });

  it('should ...', inject([Service140Service], (service: Service140Service) => {
    expect(service).toBeTruthy();
  }));
});
