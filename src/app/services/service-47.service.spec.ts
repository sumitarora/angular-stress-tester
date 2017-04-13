import { TestBed, inject } from '@angular/core/testing';

import { Service47Service } from './service-47.service';

describe('Service47Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service47Service]
    });
  });

  it('should ...', inject([Service47Service], (service: Service47Service) => {
    expect(service).toBeTruthy();
  }));
});
