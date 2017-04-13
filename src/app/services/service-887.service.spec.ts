import { TestBed, inject } from '@angular/core/testing';

import { Service887Service } from './service-887.service';

describe('Service887Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service887Service]
    });
  });

  it('should ...', inject([Service887Service], (service: Service887Service) => {
    expect(service).toBeTruthy();
  }));
});
