import { TestBed, inject } from '@angular/core/testing';

import { Service376Service } from './service-376.service';

describe('Service376Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service376Service]
    });
  });

  it('should ...', inject([Service376Service], (service: Service376Service) => {
    expect(service).toBeTruthy();
  }));
});
