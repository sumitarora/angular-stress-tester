import { TestBed, inject } from '@angular/core/testing';

import { Service454Service } from './service-454.service';

describe('Service454Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service454Service]
    });
  });

  it('should ...', inject([Service454Service], (service: Service454Service) => {
    expect(service).toBeTruthy();
  }));
});
