import { TestBed, inject } from '@angular/core/testing';

import { Service916Service } from './service-916.service';

describe('Service916Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service916Service]
    });
  });

  it('should ...', inject([Service916Service], (service: Service916Service) => {
    expect(service).toBeTruthy();
  }));
});
