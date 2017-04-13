import { TestBed, inject } from '@angular/core/testing';

import { Service164Service } from './service-164.service';

describe('Service164Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service164Service]
    });
  });

  it('should ...', inject([Service164Service], (service: Service164Service) => {
    expect(service).toBeTruthy();
  }));
});
