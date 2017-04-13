import { TestBed, inject } from '@angular/core/testing';

import { Service375Service } from './service-375.service';

describe('Service375Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service375Service]
    });
  });

  it('should ...', inject([Service375Service], (service: Service375Service) => {
    expect(service).toBeTruthy();
  }));
});
