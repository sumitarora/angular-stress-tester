import { TestBed, inject } from '@angular/core/testing';

import { Service644Service } from './service-644.service';

describe('Service644Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service644Service]
    });
  });

  it('should ...', inject([Service644Service], (service: Service644Service) => {
    expect(service).toBeTruthy();
  }));
});
