import { TestBed, inject } from '@angular/core/testing';

import { Service785Service } from './service-785.service';

describe('Service785Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service785Service]
    });
  });

  it('should ...', inject([Service785Service], (service: Service785Service) => {
    expect(service).toBeTruthy();
  }));
});
