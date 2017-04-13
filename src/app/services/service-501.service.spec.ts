import { TestBed, inject } from '@angular/core/testing';

import { Service501Service } from './service-501.service';

describe('Service501Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service501Service]
    });
  });

  it('should ...', inject([Service501Service], (service: Service501Service) => {
    expect(service).toBeTruthy();
  }));
});
