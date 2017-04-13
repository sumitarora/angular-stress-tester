import { TestBed, inject } from '@angular/core/testing';

import { Service983Service } from './service-983.service';

describe('Service983Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service983Service]
    });
  });

  it('should ...', inject([Service983Service], (service: Service983Service) => {
    expect(service).toBeTruthy();
  }));
});
