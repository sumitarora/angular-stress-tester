import { TestBed, inject } from '@angular/core/testing';

import { Service16Service } from './service-16.service';

describe('Service16Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service16Service]
    });
  });

  it('should ...', inject([Service16Service], (service: Service16Service) => {
    expect(service).toBeTruthy();
  }));
});
