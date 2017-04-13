import { TestBed, inject } from '@angular/core/testing';

import { Service701Service } from './service-701.service';

describe('Service701Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service701Service]
    });
  });

  it('should ...', inject([Service701Service], (service: Service701Service) => {
    expect(service).toBeTruthy();
  }));
});
