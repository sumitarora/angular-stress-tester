import { TestBed, inject } from '@angular/core/testing';

import { Service172Service } from './service-172.service';

describe('Service172Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service172Service]
    });
  });

  it('should ...', inject([Service172Service], (service: Service172Service) => {
    expect(service).toBeTruthy();
  }));
});
