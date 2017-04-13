import { TestBed, inject } from '@angular/core/testing';

import { Service215Service } from './service-215.service';

describe('Service215Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service215Service]
    });
  });

  it('should ...', inject([Service215Service], (service: Service215Service) => {
    expect(service).toBeTruthy();
  }));
});
