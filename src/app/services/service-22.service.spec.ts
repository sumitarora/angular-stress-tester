import { TestBed, inject } from '@angular/core/testing';

import { Service22Service } from './service-22.service';

describe('Service22Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service22Service]
    });
  });

  it('should ...', inject([Service22Service], (service: Service22Service) => {
    expect(service).toBeTruthy();
  }));
});
