import { TestBed, inject } from '@angular/core/testing';

import { Service487Service } from './service-487.service';

describe('Service487Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service487Service]
    });
  });

  it('should ...', inject([Service487Service], (service: Service487Service) => {
    expect(service).toBeTruthy();
  }));
});
