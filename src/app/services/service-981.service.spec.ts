import { TestBed, inject } from '@angular/core/testing';

import { Service981Service } from './service-981.service';

describe('Service981Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service981Service]
    });
  });

  it('should ...', inject([Service981Service], (service: Service981Service) => {
    expect(service).toBeTruthy();
  }));
});
