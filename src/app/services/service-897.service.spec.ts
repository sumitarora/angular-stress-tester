import { TestBed, inject } from '@angular/core/testing';

import { Service897Service } from './service-897.service';

describe('Service897Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service897Service]
    });
  });

  it('should ...', inject([Service897Service], (service: Service897Service) => {
    expect(service).toBeTruthy();
  }));
});
