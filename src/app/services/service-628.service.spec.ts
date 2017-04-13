import { TestBed, inject } from '@angular/core/testing';

import { Service628Service } from './service-628.service';

describe('Service628Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service628Service]
    });
  });

  it('should ...', inject([Service628Service], (service: Service628Service) => {
    expect(service).toBeTruthy();
  }));
});
