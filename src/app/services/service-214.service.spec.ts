import { TestBed, inject } from '@angular/core/testing';

import { Service214Service } from './service-214.service';

describe('Service214Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service214Service]
    });
  });

  it('should ...', inject([Service214Service], (service: Service214Service) => {
    expect(service).toBeTruthy();
  }));
});
