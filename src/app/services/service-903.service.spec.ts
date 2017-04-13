import { TestBed, inject } from '@angular/core/testing';

import { Service903Service } from './service-903.service';

describe('Service903Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service903Service]
    });
  });

  it('should ...', inject([Service903Service], (service: Service903Service) => {
    expect(service).toBeTruthy();
  }));
});
