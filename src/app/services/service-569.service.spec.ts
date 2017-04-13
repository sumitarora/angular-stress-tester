import { TestBed, inject } from '@angular/core/testing';

import { Service569Service } from './service-569.service';

describe('Service569Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service569Service]
    });
  });

  it('should ...', inject([Service569Service], (service: Service569Service) => {
    expect(service).toBeTruthy();
  }));
});
