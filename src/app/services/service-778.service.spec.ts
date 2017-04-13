import { TestBed, inject } from '@angular/core/testing';

import { Service778Service } from './service-778.service';

describe('Service778Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service778Service]
    });
  });

  it('should ...', inject([Service778Service], (service: Service778Service) => {
    expect(service).toBeTruthy();
  }));
});
