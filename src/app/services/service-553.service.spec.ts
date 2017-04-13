import { TestBed, inject } from '@angular/core/testing';

import { Service553Service } from './service-553.service';

describe('Service553Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service553Service]
    });
  });

  it('should ...', inject([Service553Service], (service: Service553Service) => {
    expect(service).toBeTruthy();
  }));
});
