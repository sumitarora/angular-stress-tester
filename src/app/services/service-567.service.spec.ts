import { TestBed, inject } from '@angular/core/testing';

import { Service567Service } from './service-567.service';

describe('Service567Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service567Service]
    });
  });

  it('should ...', inject([Service567Service], (service: Service567Service) => {
    expect(service).toBeTruthy();
  }));
});
