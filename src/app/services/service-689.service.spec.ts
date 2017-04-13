import { TestBed, inject } from '@angular/core/testing';

import { Service689Service } from './service-689.service';

describe('Service689Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service689Service]
    });
  });

  it('should ...', inject([Service689Service], (service: Service689Service) => {
    expect(service).toBeTruthy();
  }));
});
