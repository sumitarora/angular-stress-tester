import { TestBed, inject } from '@angular/core/testing';

import { Service285Service } from './service-285.service';

describe('Service285Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service285Service]
    });
  });

  it('should ...', inject([Service285Service], (service: Service285Service) => {
    expect(service).toBeTruthy();
  }));
});
