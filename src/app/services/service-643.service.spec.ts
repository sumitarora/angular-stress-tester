import { TestBed, inject } from '@angular/core/testing';

import { Service643Service } from './service-643.service';

describe('Service643Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service643Service]
    });
  });

  it('should ...', inject([Service643Service], (service: Service643Service) => {
    expect(service).toBeTruthy();
  }));
});
