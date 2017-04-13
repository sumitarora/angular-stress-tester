import { TestBed, inject } from '@angular/core/testing';

import { Service27Service } from './service-27.service';

describe('Service27Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service27Service]
    });
  });

  it('should ...', inject([Service27Service], (service: Service27Service) => {
    expect(service).toBeTruthy();
  }));
});
