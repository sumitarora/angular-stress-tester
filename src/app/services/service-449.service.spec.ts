import { TestBed, inject } from '@angular/core/testing';

import { Service449Service } from './service-449.service';

describe('Service449Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service449Service]
    });
  });

  it('should ...', inject([Service449Service], (service: Service449Service) => {
    expect(service).toBeTruthy();
  }));
});
