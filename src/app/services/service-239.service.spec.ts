import { TestBed, inject } from '@angular/core/testing';

import { Service239Service } from './service-239.service';

describe('Service239Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service239Service]
    });
  });

  it('should ...', inject([Service239Service], (service: Service239Service) => {
    expect(service).toBeTruthy();
  }));
});
