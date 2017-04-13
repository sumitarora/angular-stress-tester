import { TestBed, inject } from '@angular/core/testing';

import { Service365Service } from './service-365.service';

describe('Service365Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service365Service]
    });
  });

  it('should ...', inject([Service365Service], (service: Service365Service) => {
    expect(service).toBeTruthy();
  }));
});
