import { TestBed, inject } from '@angular/core/testing';

import { Service127Service } from './service-127.service';

describe('Service127Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service127Service]
    });
  });

  it('should ...', inject([Service127Service], (service: Service127Service) => {
    expect(service).toBeTruthy();
  }));
});
