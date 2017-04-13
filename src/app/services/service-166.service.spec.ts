import { TestBed, inject } from '@angular/core/testing';

import { Service166Service } from './service-166.service';

describe('Service166Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service166Service]
    });
  });

  it('should ...', inject([Service166Service], (service: Service166Service) => {
    expect(service).toBeTruthy();
  }));
});
