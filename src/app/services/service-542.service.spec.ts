import { TestBed, inject } from '@angular/core/testing';

import { Service542Service } from './service-542.service';

describe('Service542Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service542Service]
    });
  });

  it('should ...', inject([Service542Service], (service: Service542Service) => {
    expect(service).toBeTruthy();
  }));
});
