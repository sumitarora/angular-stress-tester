import { TestBed, inject } from '@angular/core/testing';

import { Service739Service } from './service-739.service';

describe('Service739Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service739Service]
    });
  });

  it('should ...', inject([Service739Service], (service: Service739Service) => {
    expect(service).toBeTruthy();
  }));
});
