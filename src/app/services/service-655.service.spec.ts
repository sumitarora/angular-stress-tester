import { TestBed, inject } from '@angular/core/testing';

import { Service655Service } from './service-655.service';

describe('Service655Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service655Service]
    });
  });

  it('should ...', inject([Service655Service], (service: Service655Service) => {
    expect(service).toBeTruthy();
  }));
});
