import { TestBed, inject } from '@angular/core/testing';

import { Service617Service } from './service-617.service';

describe('Service617Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service617Service]
    });
  });

  it('should ...', inject([Service617Service], (service: Service617Service) => {
    expect(service).toBeTruthy();
  }));
});
