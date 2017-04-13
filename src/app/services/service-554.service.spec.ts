import { TestBed, inject } from '@angular/core/testing';

import { Service554Service } from './service-554.service';

describe('Service554Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service554Service]
    });
  });

  it('should ...', inject([Service554Service], (service: Service554Service) => {
    expect(service).toBeTruthy();
  }));
});
