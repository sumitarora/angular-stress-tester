import { TestBed, inject } from '@angular/core/testing';

import { Service936Service } from './service-936.service';

describe('Service936Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service936Service]
    });
  });

  it('should ...', inject([Service936Service], (service: Service936Service) => {
    expect(service).toBeTruthy();
  }));
});
