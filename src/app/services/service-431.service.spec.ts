import { TestBed, inject } from '@angular/core/testing';

import { Service431Service } from './service-431.service';

describe('Service431Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service431Service]
    });
  });

  it('should ...', inject([Service431Service], (service: Service431Service) => {
    expect(service).toBeTruthy();
  }));
});
