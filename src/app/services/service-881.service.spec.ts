import { TestBed, inject } from '@angular/core/testing';

import { Service881Service } from './service-881.service';

describe('Service881Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service881Service]
    });
  });

  it('should ...', inject([Service881Service], (service: Service881Service) => {
    expect(service).toBeTruthy();
  }));
});
