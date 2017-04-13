import { TestBed, inject } from '@angular/core/testing';

import { Service180Service } from './service-180.service';

describe('Service180Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service180Service]
    });
  });

  it('should ...', inject([Service180Service], (service: Service180Service) => {
    expect(service).toBeTruthy();
  }));
});
