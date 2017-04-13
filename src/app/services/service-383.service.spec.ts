import { TestBed, inject } from '@angular/core/testing';

import { Service383Service } from './service-383.service';

describe('Service383Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service383Service]
    });
  });

  it('should ...', inject([Service383Service], (service: Service383Service) => {
    expect(service).toBeTruthy();
  }));
});
