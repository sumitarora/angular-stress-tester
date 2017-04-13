import { TestBed, inject } from '@angular/core/testing';

import { Service686Service } from './service-686.service';

describe('Service686Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service686Service]
    });
  });

  it('should ...', inject([Service686Service], (service: Service686Service) => {
    expect(service).toBeTruthy();
  }));
});
