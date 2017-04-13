import { TestBed, inject } from '@angular/core/testing';

import { Service196Service } from './service-196.service';

describe('Service196Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service196Service]
    });
  });

  it('should ...', inject([Service196Service], (service: Service196Service) => {
    expect(service).toBeTruthy();
  }));
});
