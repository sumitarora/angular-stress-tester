import { TestBed, inject } from '@angular/core/testing';

import { Service750Service } from './service-750.service';

describe('Service750Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service750Service]
    });
  });

  it('should ...', inject([Service750Service], (service: Service750Service) => {
    expect(service).toBeTruthy();
  }));
});
