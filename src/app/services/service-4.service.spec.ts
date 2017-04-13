import { TestBed, inject } from '@angular/core/testing';

import { Service4Service } from './service-4.service';

describe('Service4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service4Service]
    });
  });

  it('should ...', inject([Service4Service], (service: Service4Service) => {
    expect(service).toBeTruthy();
  }));
});
