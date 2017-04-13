import { TestBed, inject } from '@angular/core/testing';

import { Service652Service } from './service-652.service';

describe('Service652Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service652Service]
    });
  });

  it('should ...', inject([Service652Service], (service: Service652Service) => {
    expect(service).toBeTruthy();
  }));
});
