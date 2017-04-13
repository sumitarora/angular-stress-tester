import { TestBed, inject } from '@angular/core/testing';

import { Service116Service } from './service-116.service';

describe('Service116Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service116Service]
    });
  });

  it('should ...', inject([Service116Service], (service: Service116Service) => {
    expect(service).toBeTruthy();
  }));
});
