import { TestBed, inject } from '@angular/core/testing';

import { Service412Service } from './service-412.service';

describe('Service412Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service412Service]
    });
  });

  it('should ...', inject([Service412Service], (service: Service412Service) => {
    expect(service).toBeTruthy();
  }));
});
