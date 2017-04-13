import { TestBed, inject } from '@angular/core/testing';

import { Service959Service } from './service-959.service';

describe('Service959Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service959Service]
    });
  });

  it('should ...', inject([Service959Service], (service: Service959Service) => {
    expect(service).toBeTruthy();
  }));
});
