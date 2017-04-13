import { TestBed, inject } from '@angular/core/testing';

import { Service798Service } from './service-798.service';

describe('Service798Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service798Service]
    });
  });

  it('should ...', inject([Service798Service], (service: Service798Service) => {
    expect(service).toBeTruthy();
  }));
});
