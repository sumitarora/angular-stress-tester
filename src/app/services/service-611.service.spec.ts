import { TestBed, inject } from '@angular/core/testing';

import { Service611Service } from './service-611.service';

describe('Service611Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service611Service]
    });
  });

  it('should ...', inject([Service611Service], (service: Service611Service) => {
    expect(service).toBeTruthy();
  }));
});
