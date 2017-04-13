import { TestBed, inject } from '@angular/core/testing';

import { Service303Service } from './service-303.service';

describe('Service303Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service303Service]
    });
  });

  it('should ...', inject([Service303Service], (service: Service303Service) => {
    expect(service).toBeTruthy();
  }));
});
