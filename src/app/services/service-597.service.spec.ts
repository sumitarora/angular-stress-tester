import { TestBed, inject } from '@angular/core/testing';

import { Service597Service } from './service-597.service';

describe('Service597Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service597Service]
    });
  });

  it('should ...', inject([Service597Service], (service: Service597Service) => {
    expect(service).toBeTruthy();
  }));
});
