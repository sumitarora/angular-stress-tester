import { TestBed, inject } from '@angular/core/testing';

import { Service193Service } from './service-193.service';

describe('Service193Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service193Service]
    });
  });

  it('should ...', inject([Service193Service], (service: Service193Service) => {
    expect(service).toBeTruthy();
  }));
});
