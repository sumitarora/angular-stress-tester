import { TestBed, inject } from '@angular/core/testing';

import { Service877Service } from './service-877.service';

describe('Service877Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service877Service]
    });
  });

  it('should ...', inject([Service877Service], (service: Service877Service) => {
    expect(service).toBeTruthy();
  }));
});
