import { TestBed, inject } from '@angular/core/testing';

import { Service948Service } from './service-948.service';

describe('Service948Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service948Service]
    });
  });

  it('should ...', inject([Service948Service], (service: Service948Service) => {
    expect(service).toBeTruthy();
  }));
});
