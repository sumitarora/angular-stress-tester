import { TestBed, inject } from '@angular/core/testing';

import { Service261Service } from './service-261.service';

describe('Service261Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service261Service]
    });
  });

  it('should ...', inject([Service261Service], (service: Service261Service) => {
    expect(service).toBeTruthy();
  }));
});
