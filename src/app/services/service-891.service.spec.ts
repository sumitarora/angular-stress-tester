import { TestBed, inject } from '@angular/core/testing';

import { Service891Service } from './service-891.service';

describe('Service891Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service891Service]
    });
  });

  it('should ...', inject([Service891Service], (service: Service891Service) => {
    expect(service).toBeTruthy();
  }));
});
