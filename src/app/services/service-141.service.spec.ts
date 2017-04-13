import { TestBed, inject } from '@angular/core/testing';

import { Service141Service } from './service-141.service';

describe('Service141Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service141Service]
    });
  });

  it('should ...', inject([Service141Service], (service: Service141Service) => {
    expect(service).toBeTruthy();
  }));
});
