import { TestBed, inject } from '@angular/core/testing';

import { Service533Service } from './service-533.service';

describe('Service533Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service533Service]
    });
  });

  it('should ...', inject([Service533Service], (service: Service533Service) => {
    expect(service).toBeTruthy();
  }));
});
