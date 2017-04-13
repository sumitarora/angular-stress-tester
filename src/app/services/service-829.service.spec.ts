import { TestBed, inject } from '@angular/core/testing';

import { Service829Service } from './service-829.service';

describe('Service829Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service829Service]
    });
  });

  it('should ...', inject([Service829Service], (service: Service829Service) => {
    expect(service).toBeTruthy();
  }));
});
