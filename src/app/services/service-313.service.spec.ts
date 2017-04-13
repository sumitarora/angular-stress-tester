import { TestBed, inject } from '@angular/core/testing';

import { Service313Service } from './service-313.service';

describe('Service313Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service313Service]
    });
  });

  it('should ...', inject([Service313Service], (service: Service313Service) => {
    expect(service).toBeTruthy();
  }));
});
