import { TestBed, inject } from '@angular/core/testing';

import { Service650Service } from './service-650.service';

describe('Service650Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service650Service]
    });
  });

  it('should ...', inject([Service650Service], (service: Service650Service) => {
    expect(service).toBeTruthy();
  }));
});
