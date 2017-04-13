import { TestBed, inject } from '@angular/core/testing';

import { Service124Service } from './service-124.service';

describe('Service124Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service124Service]
    });
  });

  it('should ...', inject([Service124Service], (service: Service124Service) => {
    expect(service).toBeTruthy();
  }));
});
