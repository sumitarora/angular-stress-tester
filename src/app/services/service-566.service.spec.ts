import { TestBed, inject } from '@angular/core/testing';

import { Service566Service } from './service-566.service';

describe('Service566Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service566Service]
    });
  });

  it('should ...', inject([Service566Service], (service: Service566Service) => {
    expect(service).toBeTruthy();
  }));
});
