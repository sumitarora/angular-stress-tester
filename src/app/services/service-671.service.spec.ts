import { TestBed, inject } from '@angular/core/testing';

import { Service671Service } from './service-671.service';

describe('Service671Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service671Service]
    });
  });

  it('should ...', inject([Service671Service], (service: Service671Service) => {
    expect(service).toBeTruthy();
  }));
});
