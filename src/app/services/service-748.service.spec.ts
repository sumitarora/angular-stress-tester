import { TestBed, inject } from '@angular/core/testing';

import { Service748Service } from './service-748.service';

describe('Service748Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service748Service]
    });
  });

  it('should ...', inject([Service748Service], (service: Service748Service) => {
    expect(service).toBeTruthy();
  }));
});
