import { TestBed, inject } from '@angular/core/testing';

import { Service271Service } from './service-271.service';

describe('Service271Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service271Service]
    });
  });

  it('should ...', inject([Service271Service], (service: Service271Service) => {
    expect(service).toBeTruthy();
  }));
});
