import { TestBed, inject } from '@angular/core/testing';

import { Service330Service } from './service-330.service';

describe('Service330Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service330Service]
    });
  });

  it('should ...', inject([Service330Service], (service: Service330Service) => {
    expect(service).toBeTruthy();
  }));
});
