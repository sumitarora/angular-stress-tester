import { TestBed, inject } from '@angular/core/testing';

import { Service370Service } from './service-370.service';

describe('Service370Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service370Service]
    });
  });

  it('should ...', inject([Service370Service], (service: Service370Service) => {
    expect(service).toBeTruthy();
  }));
});
