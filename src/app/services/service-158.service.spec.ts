import { TestBed, inject } from '@angular/core/testing';

import { Service158Service } from './service-158.service';

describe('Service158Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service158Service]
    });
  });

  it('should ...', inject([Service158Service], (service: Service158Service) => {
    expect(service).toBeTruthy();
  }));
});
