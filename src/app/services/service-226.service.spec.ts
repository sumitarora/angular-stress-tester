import { TestBed, inject } from '@angular/core/testing';

import { Service226Service } from './service-226.service';

describe('Service226Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service226Service]
    });
  });

  it('should ...', inject([Service226Service], (service: Service226Service) => {
    expect(service).toBeTruthy();
  }));
});
