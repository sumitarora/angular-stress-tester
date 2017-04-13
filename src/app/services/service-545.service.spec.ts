import { TestBed, inject } from '@angular/core/testing';

import { Service545Service } from './service-545.service';

describe('Service545Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service545Service]
    });
  });

  it('should ...', inject([Service545Service], (service: Service545Service) => {
    expect(service).toBeTruthy();
  }));
});
