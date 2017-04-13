import { TestBed, inject } from '@angular/core/testing';

import { Service167Service } from './service-167.service';

describe('Service167Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service167Service]
    });
  });

  it('should ...', inject([Service167Service], (service: Service167Service) => {
    expect(service).toBeTruthy();
  }));
});
