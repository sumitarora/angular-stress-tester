import { TestBed, inject } from '@angular/core/testing';

import { Service457Service } from './service-457.service';

describe('Service457Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service457Service]
    });
  });

  it('should ...', inject([Service457Service], (service: Service457Service) => {
    expect(service).toBeTruthy();
  }));
});
