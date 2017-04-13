import { TestBed, inject } from '@angular/core/testing';

import { Service224Service } from './service-224.service';

describe('Service224Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service224Service]
    });
  });

  it('should ...', inject([Service224Service], (service: Service224Service) => {
    expect(service).toBeTruthy();
  }));
});
