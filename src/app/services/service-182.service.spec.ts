import { TestBed, inject } from '@angular/core/testing';

import { Service182Service } from './service-182.service';

describe('Service182Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service182Service]
    });
  });

  it('should ...', inject([Service182Service], (service: Service182Service) => {
    expect(service).toBeTruthy();
  }));
});
