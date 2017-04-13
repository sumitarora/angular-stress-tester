import { TestBed, inject } from '@angular/core/testing';

import { Service201Service } from './service-201.service';

describe('Service201Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service201Service]
    });
  });

  it('should ...', inject([Service201Service], (service: Service201Service) => {
    expect(service).toBeTruthy();
  }));
});
