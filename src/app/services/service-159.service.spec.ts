import { TestBed, inject } from '@angular/core/testing';

import { Service159Service } from './service-159.service';

describe('Service159Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service159Service]
    });
  });

  it('should ...', inject([Service159Service], (service: Service159Service) => {
    expect(service).toBeTruthy();
  }));
});
