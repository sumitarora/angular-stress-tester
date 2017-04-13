import { TestBed, inject } from '@angular/core/testing';

import { Service134Service } from './service-134.service';

describe('Service134Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service134Service]
    });
  });

  it('should ...', inject([Service134Service], (service: Service134Service) => {
    expect(service).toBeTruthy();
  }));
});
