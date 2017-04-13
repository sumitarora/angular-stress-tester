import { TestBed, inject } from '@angular/core/testing';

import { Service804Service } from './service-804.service';

describe('Service804Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service804Service]
    });
  });

  it('should ...', inject([Service804Service], (service: Service804Service) => {
    expect(service).toBeTruthy();
  }));
});
