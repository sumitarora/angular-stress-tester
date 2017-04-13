import { TestBed, inject } from '@angular/core/testing';

import { Service187Service } from './service-187.service';

describe('Service187Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service187Service]
    });
  });

  it('should ...', inject([Service187Service], (service: Service187Service) => {
    expect(service).toBeTruthy();
  }));
});
