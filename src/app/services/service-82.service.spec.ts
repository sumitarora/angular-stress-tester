import { TestBed, inject } from '@angular/core/testing';

import { Service82Service } from './service-82.service';

describe('Service82Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service82Service]
    });
  });

  it('should ...', inject([Service82Service], (service: Service82Service) => {
    expect(service).toBeTruthy();
  }));
});
