import { TestBed, inject } from '@angular/core/testing';

import { Service522Service } from './service-522.service';

describe('Service522Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service522Service]
    });
  });

  it('should ...', inject([Service522Service], (service: Service522Service) => {
    expect(service).toBeTruthy();
  }));
});
