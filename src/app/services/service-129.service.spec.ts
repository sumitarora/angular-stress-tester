import { TestBed, inject } from '@angular/core/testing';

import { Service129Service } from './service-129.service';

describe('Service129Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service129Service]
    });
  });

  it('should ...', inject([Service129Service], (service: Service129Service) => {
    expect(service).toBeTruthy();
  }));
});
