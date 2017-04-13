import { TestBed, inject } from '@angular/core/testing';

import { Service926Service } from './service-926.service';

describe('Service926Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service926Service]
    });
  });

  it('should ...', inject([Service926Service], (service: Service926Service) => {
    expect(service).toBeTruthy();
  }));
});
