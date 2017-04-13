import { TestBed, inject } from '@angular/core/testing';

import { Service820Service } from './service-820.service';

describe('Service820Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service820Service]
    });
  });

  it('should ...', inject([Service820Service], (service: Service820Service) => {
    expect(service).toBeTruthy();
  }));
});
