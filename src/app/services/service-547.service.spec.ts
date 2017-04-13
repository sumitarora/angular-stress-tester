import { TestBed, inject } from '@angular/core/testing';

import { Service547Service } from './service-547.service';

describe('Service547Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service547Service]
    });
  });

  it('should ...', inject([Service547Service], (service: Service547Service) => {
    expect(service).toBeTruthy();
  }));
});
