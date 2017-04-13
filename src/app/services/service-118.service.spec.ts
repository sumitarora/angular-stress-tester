import { TestBed, inject } from '@angular/core/testing';

import { Service118Service } from './service-118.service';

describe('Service118Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service118Service]
    });
  });

  it('should ...', inject([Service118Service], (service: Service118Service) => {
    expect(service).toBeTruthy();
  }));
});
