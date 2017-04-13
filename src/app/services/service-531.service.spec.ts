import { TestBed, inject } from '@angular/core/testing';

import { Service531Service } from './service-531.service';

describe('Service531Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service531Service]
    });
  });

  it('should ...', inject([Service531Service], (service: Service531Service) => {
    expect(service).toBeTruthy();
  }));
});
