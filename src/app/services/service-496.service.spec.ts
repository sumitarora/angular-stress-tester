import { TestBed, inject } from '@angular/core/testing';

import { Service496Service } from './service-496.service';

describe('Service496Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service496Service]
    });
  });

  it('should ...', inject([Service496Service], (service: Service496Service) => {
    expect(service).toBeTruthy();
  }));
});
