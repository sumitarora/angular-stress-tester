import { TestBed, inject } from '@angular/core/testing';

import { Service751Service } from './service-751.service';

describe('Service751Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service751Service]
    });
  });

  it('should ...', inject([Service751Service], (service: Service751Service) => {
    expect(service).toBeTruthy();
  }));
});
