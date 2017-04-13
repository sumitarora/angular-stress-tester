import { TestBed, inject } from '@angular/core/testing';

import { Service912Service } from './service-912.service';

describe('Service912Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service912Service]
    });
  });

  it('should ...', inject([Service912Service], (service: Service912Service) => {
    expect(service).toBeTruthy();
  }));
});
