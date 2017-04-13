import { TestBed, inject } from '@angular/core/testing';

import { Service363Service } from './service-363.service';

describe('Service363Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service363Service]
    });
  });

  it('should ...', inject([Service363Service], (service: Service363Service) => {
    expect(service).toBeTruthy();
  }));
});
