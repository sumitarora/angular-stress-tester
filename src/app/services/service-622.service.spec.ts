import { TestBed, inject } from '@angular/core/testing';

import { Service622Service } from './service-622.service';

describe('Service622Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service622Service]
    });
  });

  it('should ...', inject([Service622Service], (service: Service622Service) => {
    expect(service).toBeTruthy();
  }));
});
