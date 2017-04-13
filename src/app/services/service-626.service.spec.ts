import { TestBed, inject } from '@angular/core/testing';

import { Service626Service } from './service-626.service';

describe('Service626Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service626Service]
    });
  });

  it('should ...', inject([Service626Service], (service: Service626Service) => {
    expect(service).toBeTruthy();
  }));
});
