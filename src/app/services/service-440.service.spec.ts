import { TestBed, inject } from '@angular/core/testing';

import { Service440Service } from './service-440.service';

describe('Service440Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service440Service]
    });
  });

  it('should ...', inject([Service440Service], (service: Service440Service) => {
    expect(service).toBeTruthy();
  }));
});
