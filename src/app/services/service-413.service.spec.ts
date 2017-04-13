import { TestBed, inject } from '@angular/core/testing';

import { Service413Service } from './service-413.service';

describe('Service413Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service413Service]
    });
  });

  it('should ...', inject([Service413Service], (service: Service413Service) => {
    expect(service).toBeTruthy();
  }));
});
