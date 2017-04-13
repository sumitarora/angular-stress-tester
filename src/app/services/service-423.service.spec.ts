import { TestBed, inject } from '@angular/core/testing';

import { Service423Service } from './service-423.service';

describe('Service423Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service423Service]
    });
  });

  it('should ...', inject([Service423Service], (service: Service423Service) => {
    expect(service).toBeTruthy();
  }));
});
