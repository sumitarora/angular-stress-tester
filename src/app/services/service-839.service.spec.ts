import { TestBed, inject } from '@angular/core/testing';

import { Service839Service } from './service-839.service';

describe('Service839Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service839Service]
    });
  });

  it('should ...', inject([Service839Service], (service: Service839Service) => {
    expect(service).toBeTruthy();
  }));
});
