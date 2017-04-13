import { TestBed, inject } from '@angular/core/testing';

import { Service675Service } from './service-675.service';

describe('Service675Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service675Service]
    });
  });

  it('should ...', inject([Service675Service], (service: Service675Service) => {
    expect(service).toBeTruthy();
  }));
});
