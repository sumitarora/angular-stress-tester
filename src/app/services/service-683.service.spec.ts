import { TestBed, inject } from '@angular/core/testing';

import { Service683Service } from './service-683.service';

describe('Service683Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service683Service]
    });
  });

  it('should ...', inject([Service683Service], (service: Service683Service) => {
    expect(service).toBeTruthy();
  }));
});
