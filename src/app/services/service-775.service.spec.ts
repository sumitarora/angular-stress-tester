import { TestBed, inject } from '@angular/core/testing';

import { Service775Service } from './service-775.service';

describe('Service775Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service775Service]
    });
  });

  it('should ...', inject([Service775Service], (service: Service775Service) => {
    expect(service).toBeTruthy();
  }));
});
