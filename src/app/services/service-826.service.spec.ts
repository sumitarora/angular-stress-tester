import { TestBed, inject } from '@angular/core/testing';

import { Service826Service } from './service-826.service';

describe('Service826Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service826Service]
    });
  });

  it('should ...', inject([Service826Service], (service: Service826Service) => {
    expect(service).toBeTruthy();
  }));
});
