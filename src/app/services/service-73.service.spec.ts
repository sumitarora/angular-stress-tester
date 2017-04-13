import { TestBed, inject } from '@angular/core/testing';

import { Service73Service } from './service-73.service';

describe('Service73Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service73Service]
    });
  });

  it('should ...', inject([Service73Service], (service: Service73Service) => {
    expect(service).toBeTruthy();
  }));
});
