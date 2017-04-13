import { TestBed, inject } from '@angular/core/testing';

import { Service207Service } from './service-207.service';

describe('Service207Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service207Service]
    });
  });

  it('should ...', inject([Service207Service], (service: Service207Service) => {
    expect(service).toBeTruthy();
  }));
});
