import { TestBed, inject } from '@angular/core/testing';

import { Service630Service } from './service-630.service';

describe('Service630Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service630Service]
    });
  });

  it('should ...', inject([Service630Service], (service: Service630Service) => {
    expect(service).toBeTruthy();
  }));
});
