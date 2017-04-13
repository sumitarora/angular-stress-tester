import { TestBed, inject } from '@angular/core/testing';

import { Service857Service } from './service-857.service';

describe('Service857Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service857Service]
    });
  });

  it('should ...', inject([Service857Service], (service: Service857Service) => {
    expect(service).toBeTruthy();
  }));
});
