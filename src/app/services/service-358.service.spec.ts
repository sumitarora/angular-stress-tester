import { TestBed, inject } from '@angular/core/testing';

import { Service358Service } from './service-358.service';

describe('Service358Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service358Service]
    });
  });

  it('should ...', inject([Service358Service], (service: Service358Service) => {
    expect(service).toBeTruthy();
  }));
});
