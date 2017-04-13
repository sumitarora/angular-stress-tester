import { TestBed, inject } from '@angular/core/testing';

import { Service781Service } from './service-781.service';

describe('Service781Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service781Service]
    });
  });

  it('should ...', inject([Service781Service], (service: Service781Service) => {
    expect(service).toBeTruthy();
  }));
});
