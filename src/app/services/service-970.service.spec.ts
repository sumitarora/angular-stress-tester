import { TestBed, inject } from '@angular/core/testing';

import { Service970Service } from './service-970.service';

describe('Service970Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service970Service]
    });
  });

  it('should ...', inject([Service970Service], (service: Service970Service) => {
    expect(service).toBeTruthy();
  }));
});
