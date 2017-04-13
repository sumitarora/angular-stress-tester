import { TestBed, inject } from '@angular/core/testing';

import { Service333Service } from './service-333.service';

describe('Service333Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service333Service]
    });
  });

  it('should ...', inject([Service333Service], (service: Service333Service) => {
    expect(service).toBeTruthy();
  }));
});
