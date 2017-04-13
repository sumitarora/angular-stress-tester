import { TestBed, inject } from '@angular/core/testing';

import { Service927Service } from './service-927.service';

describe('Service927Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service927Service]
    });
  });

  it('should ...', inject([Service927Service], (service: Service927Service) => {
    expect(service).toBeTruthy();
  }));
});
