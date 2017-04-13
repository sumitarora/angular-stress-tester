import { TestBed, inject } from '@angular/core/testing';

import { Service864Service } from './service-864.service';

describe('Service864Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service864Service]
    });
  });

  it('should ...', inject([Service864Service], (service: Service864Service) => {
    expect(service).toBeTruthy();
  }));
});
