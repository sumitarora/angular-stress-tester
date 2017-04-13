import { TestBed, inject } from '@angular/core/testing';

import { Service949Service } from './service-949.service';

describe('Service949Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service949Service]
    });
  });

  it('should ...', inject([Service949Service], (service: Service949Service) => {
    expect(service).toBeTruthy();
  }));
});
