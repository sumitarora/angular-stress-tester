import { TestBed, inject } from '@angular/core/testing';

import { Service965Service } from './service-965.service';

describe('Service965Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service965Service]
    });
  });

  it('should ...', inject([Service965Service], (service: Service965Service) => {
    expect(service).toBeTruthy();
  }));
});
