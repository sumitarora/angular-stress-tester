import { TestBed, inject } from '@angular/core/testing';

import { Service539Service } from './service-539.service';

describe('Service539Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service539Service]
    });
  });

  it('should ...', inject([Service539Service], (service: Service539Service) => {
    expect(service).toBeTruthy();
  }));
});
