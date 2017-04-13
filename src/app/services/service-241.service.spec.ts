import { TestBed, inject } from '@angular/core/testing';

import { Service241Service } from './service-241.service';

describe('Service241Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service241Service]
    });
  });

  it('should ...', inject([Service241Service], (service: Service241Service) => {
    expect(service).toBeTruthy();
  }));
});
