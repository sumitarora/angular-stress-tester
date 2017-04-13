import { TestBed, inject } from '@angular/core/testing';

import { Service658Service } from './service-658.service';

describe('Service658Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service658Service]
    });
  });

  it('should ...', inject([Service658Service], (service: Service658Service) => {
    expect(service).toBeTruthy();
  }));
});
