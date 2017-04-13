import { TestBed, inject } from '@angular/core/testing';

import { Service12Service } from './service-12.service';

describe('Service12Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service12Service]
    });
  });

  it('should ...', inject([Service12Service], (service: Service12Service) => {
    expect(service).toBeTruthy();
  }));
});
