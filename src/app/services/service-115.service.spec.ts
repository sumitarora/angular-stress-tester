import { TestBed, inject } from '@angular/core/testing';

import { Service115Service } from './service-115.service';

describe('Service115Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service115Service]
    });
  });

  it('should ...', inject([Service115Service], (service: Service115Service) => {
    expect(service).toBeTruthy();
  }));
});
