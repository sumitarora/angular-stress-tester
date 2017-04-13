import { TestBed, inject } from '@angular/core/testing';

import { Service518Service } from './service-518.service';

describe('Service518Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service518Service]
    });
  });

  it('should ...', inject([Service518Service], (service: Service518Service) => {
    expect(service).toBeTruthy();
  }));
});
