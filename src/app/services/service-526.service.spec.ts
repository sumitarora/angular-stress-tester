import { TestBed, inject } from '@angular/core/testing';

import { Service526Service } from './service-526.service';

describe('Service526Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service526Service]
    });
  });

  it('should ...', inject([Service526Service], (service: Service526Service) => {
    expect(service).toBeTruthy();
  }));
});
