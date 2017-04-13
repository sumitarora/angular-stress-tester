import { TestBed, inject } from '@angular/core/testing';

import { Service598Service } from './service-598.service';

describe('Service598Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service598Service]
    });
  });

  it('should ...', inject([Service598Service], (service: Service598Service) => {
    expect(service).toBeTruthy();
  }));
});
