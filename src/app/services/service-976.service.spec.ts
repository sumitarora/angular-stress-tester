import { TestBed, inject } from '@angular/core/testing';

import { Service976Service } from './service-976.service';

describe('Service976Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service976Service]
    });
  });

  it('should ...', inject([Service976Service], (service: Service976Service) => {
    expect(service).toBeTruthy();
  }));
});
