import { TestBed, inject } from '@angular/core/testing';

import { Service967Service } from './service-967.service';

describe('Service967Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service967Service]
    });
  });

  it('should ...', inject([Service967Service], (service: Service967Service) => {
    expect(service).toBeTruthy();
  }));
});
