import { TestBed, inject } from '@angular/core/testing';

import { Service651Service } from './service-651.service';

describe('Service651Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service651Service]
    });
  });

  it('should ...', inject([Service651Service], (service: Service651Service) => {
    expect(service).toBeTruthy();
  }));
});
