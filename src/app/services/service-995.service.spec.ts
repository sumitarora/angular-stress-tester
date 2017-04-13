import { TestBed, inject } from '@angular/core/testing';

import { Service995Service } from './service-995.service';

describe('Service995Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service995Service]
    });
  });

  it('should ...', inject([Service995Service], (service: Service995Service) => {
    expect(service).toBeTruthy();
  }));
});
