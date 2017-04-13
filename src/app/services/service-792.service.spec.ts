import { TestBed, inject } from '@angular/core/testing';

import { Service792Service } from './service-792.service';

describe('Service792Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service792Service]
    });
  });

  it('should ...', inject([Service792Service], (service: Service792Service) => {
    expect(service).toBeTruthy();
  }));
});
