import { TestBed, inject } from '@angular/core/testing';

import { Service456Service } from './service-456.service';

describe('Service456Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service456Service]
    });
  });

  it('should ...', inject([Service456Service], (service: Service456Service) => {
    expect(service).toBeTruthy();
  }));
});
