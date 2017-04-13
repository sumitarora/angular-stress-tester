import { TestBed, inject } from '@angular/core/testing';

import { Service409Service } from './service-409.service';

describe('Service409Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service409Service]
    });
  });

  it('should ...', inject([Service409Service], (service: Service409Service) => {
    expect(service).toBeTruthy();
  }));
});
