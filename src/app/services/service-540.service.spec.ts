import { TestBed, inject } from '@angular/core/testing';

import { Service540Service } from './service-540.service';

describe('Service540Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service540Service]
    });
  });

  it('should ...', inject([Service540Service], (service: Service540Service) => {
    expect(service).toBeTruthy();
  }));
});
