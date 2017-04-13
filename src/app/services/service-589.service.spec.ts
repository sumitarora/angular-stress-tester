import { TestBed, inject } from '@angular/core/testing';

import { Service589Service } from './service-589.service';

describe('Service589Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service589Service]
    });
  });

  it('should ...', inject([Service589Service], (service: Service589Service) => {
    expect(service).toBeTruthy();
  }));
});
