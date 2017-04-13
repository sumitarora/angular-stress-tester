import { TestBed, inject } from '@angular/core/testing';

import { Service354Service } from './service-354.service';

describe('Service354Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service354Service]
    });
  });

  it('should ...', inject([Service354Service], (service: Service354Service) => {
    expect(service).toBeTruthy();
  }));
});
