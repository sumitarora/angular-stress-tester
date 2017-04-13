import { TestBed, inject } from '@angular/core/testing';

import { Service536Service } from './service-536.service';

describe('Service536Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service536Service]
    });
  });

  it('should ...', inject([Service536Service], (service: Service536Service) => {
    expect(service).toBeTruthy();
  }));
});
