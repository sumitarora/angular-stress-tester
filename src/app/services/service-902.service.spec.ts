import { TestBed, inject } from '@angular/core/testing';

import { Service902Service } from './service-902.service';

describe('Service902Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service902Service]
    });
  });

  it('should ...', inject([Service902Service], (service: Service902Service) => {
    expect(service).toBeTruthy();
  }));
});
