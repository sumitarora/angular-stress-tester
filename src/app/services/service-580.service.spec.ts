import { TestBed, inject } from '@angular/core/testing';

import { Service580Service } from './service-580.service';

describe('Service580Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service580Service]
    });
  });

  it('should ...', inject([Service580Service], (service: Service580Service) => {
    expect(service).toBeTruthy();
  }));
});
