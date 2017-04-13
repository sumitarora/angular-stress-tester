import { TestBed, inject } from '@angular/core/testing';

import { Service258Service } from './service-258.service';

describe('Service258Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service258Service]
    });
  });

  it('should ...', inject([Service258Service], (service: Service258Service) => {
    expect(service).toBeTruthy();
  }));
});
