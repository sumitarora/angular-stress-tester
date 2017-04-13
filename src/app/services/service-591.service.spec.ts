import { TestBed, inject } from '@angular/core/testing';

import { Service591Service } from './service-591.service';

describe('Service591Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service591Service]
    });
  });

  it('should ...', inject([Service591Service], (service: Service591Service) => {
    expect(service).toBeTruthy();
  }));
});
