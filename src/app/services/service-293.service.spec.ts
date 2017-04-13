import { TestBed, inject } from '@angular/core/testing';

import { Service293Service } from './service-293.service';

describe('Service293Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service293Service]
    });
  });

  it('should ...', inject([Service293Service], (service: Service293Service) => {
    expect(service).toBeTruthy();
  }));
});
