import { TestBed, inject } from '@angular/core/testing';

import { Service977Service } from './service-977.service';

describe('Service977Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service977Service]
    });
  });

  it('should ...', inject([Service977Service], (service: Service977Service) => {
    expect(service).toBeTruthy();
  }));
});
