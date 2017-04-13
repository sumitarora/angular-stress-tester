import { TestBed, inject } from '@angular/core/testing';

import { Service377Service } from './service-377.service';

describe('Service377Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service377Service]
    });
  });

  it('should ...', inject([Service377Service], (service: Service377Service) => {
    expect(service).toBeTruthy();
  }));
});
