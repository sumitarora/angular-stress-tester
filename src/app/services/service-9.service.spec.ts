import { TestBed, inject } from '@angular/core/testing';

import { Service9Service } from './service-9.service';

describe('Service9Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service9Service]
    });
  });

  it('should ...', inject([Service9Service], (service: Service9Service) => {
    expect(service).toBeTruthy();
  }));
});
