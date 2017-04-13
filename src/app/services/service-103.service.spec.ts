import { TestBed, inject } from '@angular/core/testing';

import { Service103Service } from './service-103.service';

describe('Service103Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service103Service]
    });
  });

  it('should ...', inject([Service103Service], (service: Service103Service) => {
    expect(service).toBeTruthy();
  }));
});
