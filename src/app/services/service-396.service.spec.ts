import { TestBed, inject } from '@angular/core/testing';

import { Service396Service } from './service-396.service';

describe('Service396Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service396Service]
    });
  });

  it('should ...', inject([Service396Service], (service: Service396Service) => {
    expect(service).toBeTruthy();
  }));
});
