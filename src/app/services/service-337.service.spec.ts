import { TestBed, inject } from '@angular/core/testing';

import { Service337Service } from './service-337.service';

describe('Service337Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service337Service]
    });
  });

  it('should ...', inject([Service337Service], (service: Service337Service) => {
    expect(service).toBeTruthy();
  }));
});
