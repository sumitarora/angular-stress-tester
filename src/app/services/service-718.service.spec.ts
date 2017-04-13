import { TestBed, inject } from '@angular/core/testing';

import { Service718Service } from './service-718.service';

describe('Service718Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service718Service]
    });
  });

  it('should ...', inject([Service718Service], (service: Service718Service) => {
    expect(service).toBeTruthy();
  }));
});
