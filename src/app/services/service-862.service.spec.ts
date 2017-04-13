import { TestBed, inject } from '@angular/core/testing';

import { Service862Service } from './service-862.service';

describe('Service862Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service862Service]
    });
  });

  it('should ...', inject([Service862Service], (service: Service862Service) => {
    expect(service).toBeTruthy();
  }));
});
