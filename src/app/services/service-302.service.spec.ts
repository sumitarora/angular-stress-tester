import { TestBed, inject } from '@angular/core/testing';

import { Service302Service } from './service-302.service';

describe('Service302Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service302Service]
    });
  });

  it('should ...', inject([Service302Service], (service: Service302Service) => {
    expect(service).toBeTruthy();
  }));
});
