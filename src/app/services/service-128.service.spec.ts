import { TestBed, inject } from '@angular/core/testing';

import { Service128Service } from './service-128.service';

describe('Service128Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service128Service]
    });
  });

  it('should ...', inject([Service128Service], (service: Service128Service) => {
    expect(service).toBeTruthy();
  }));
});
