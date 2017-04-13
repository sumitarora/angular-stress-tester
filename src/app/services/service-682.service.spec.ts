import { TestBed, inject } from '@angular/core/testing';

import { Service682Service } from './service-682.service';

describe('Service682Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service682Service]
    });
  });

  it('should ...', inject([Service682Service], (service: Service682Service) => {
    expect(service).toBeTruthy();
  }));
});
