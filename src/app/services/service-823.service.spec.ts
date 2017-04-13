import { TestBed, inject } from '@angular/core/testing';

import { Service823Service } from './service-823.service';

describe('Service823Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service823Service]
    });
  });

  it('should ...', inject([Service823Service], (service: Service823Service) => {
    expect(service).toBeTruthy();
  }));
});
