import { TestBed, inject } from '@angular/core/testing';

import { Service341Service } from './service-341.service';

describe('Service341Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service341Service]
    });
  });

  it('should ...', inject([Service341Service], (service: Service341Service) => {
    expect(service).toBeTruthy();
  }));
});
