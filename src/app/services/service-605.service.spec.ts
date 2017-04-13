import { TestBed, inject } from '@angular/core/testing';

import { Service605Service } from './service-605.service';

describe('Service605Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service605Service]
    });
  });

  it('should ...', inject([Service605Service], (service: Service605Service) => {
    expect(service).toBeTruthy();
  }));
});
