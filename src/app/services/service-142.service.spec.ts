import { TestBed, inject } from '@angular/core/testing';

import { Service142Service } from './service-142.service';

describe('Service142Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service142Service]
    });
  });

  it('should ...', inject([Service142Service], (service: Service142Service) => {
    expect(service).toBeTruthy();
  }));
});
