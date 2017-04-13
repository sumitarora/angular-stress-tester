import { TestBed, inject } from '@angular/core/testing';

import { Service907Service } from './service-907.service';

describe('Service907Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service907Service]
    });
  });

  it('should ...', inject([Service907Service], (service: Service907Service) => {
    expect(service).toBeTruthy();
  }));
});
