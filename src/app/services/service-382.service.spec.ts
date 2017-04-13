import { TestBed, inject } from '@angular/core/testing';

import { Service382Service } from './service-382.service';

describe('Service382Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service382Service]
    });
  });

  it('should ...', inject([Service382Service], (service: Service382Service) => {
    expect(service).toBeTruthy();
  }));
});
