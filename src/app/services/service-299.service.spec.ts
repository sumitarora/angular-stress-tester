import { TestBed, inject } from '@angular/core/testing';

import { Service299Service } from './service-299.service';

describe('Service299Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service299Service]
    });
  });

  it('should ...', inject([Service299Service], (service: Service299Service) => {
    expect(service).toBeTruthy();
  }));
});
