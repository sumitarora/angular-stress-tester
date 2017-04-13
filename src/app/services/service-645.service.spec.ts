import { TestBed, inject } from '@angular/core/testing';

import { Service645Service } from './service-645.service';

describe('Service645Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service645Service]
    });
  });

  it('should ...', inject([Service645Service], (service: Service645Service) => {
    expect(service).toBeTruthy();
  }));
});
