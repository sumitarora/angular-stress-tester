import { TestBed, inject } from '@angular/core/testing';

import { Service99Service } from './service-99.service';

describe('Service99Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service99Service]
    });
  });

  it('should ...', inject([Service99Service], (service: Service99Service) => {
    expect(service).toBeTruthy();
  }));
});
