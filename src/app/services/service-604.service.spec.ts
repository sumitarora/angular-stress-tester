import { TestBed, inject } from '@angular/core/testing';

import { Service604Service } from './service-604.service';

describe('Service604Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service604Service]
    });
  });

  it('should ...', inject([Service604Service], (service: Service604Service) => {
    expect(service).toBeTruthy();
  }));
});
